import { useCallback, useEffect, useRef, useState } from "react";

import BingoCell from "./BingoCell";
import useCardPhrases from "../hooks/useCardPhrases";
import useWinSounds from "../hooks/useWinSounds";
import FireworksDisplay from "../animations/FireworksDisplay";
import WinAnimation from "../animations/WinAnimation";

const BingoCard = () => {
  const { cardPhrases, generateRandomCard } = useCardPhrases();
  const [cells, setCells] = useState(Array(25).fill(false));
  const [winLines, setWinLines] = useState([]);
  const prevWinLinesLengthRef = useRef(0);
  // Pass winLines as an argument to play sounds only when there's a change in winLines
  const playRandomExplosionSound = useWinSounds();

  // Function to toggle cell state (active/inactive) upon click
  const toggleCell = (index) => {
    if (index === 12) return; // free slot
    const newCells = [...cells];
    newCells[index] = !newCells[index];
    setCells(newCells);
  };

  const checkBingo = useCallback(() => {
    const lines = [
      [0, 1, 2, 3, 4],
      [5, 6, 7, 8, 9],
      [10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19],
      [20, 21, 22, 23, 24],
      [0, 5, 10, 15, 20],
      [1, 6, 11, 16, 21],
      [2, 7, 12, 17, 22],
      [3, 8, 13, 18, 23],
      [4, 9, 14, 19, 24],
      [0, 6, 12, 18, 24],
      [4, 8, 12, 16, 20],
    ];

    // Determine winning lines by checking if all cells in a line are active
    const winningLines = lines.filter((line) =>
      line.every((index) => cells[index] || index === 12)
    );
    return winningLines;
  }, [cells]);

  //* Must have to use three useEffect
  // Update winLines state whenever cells state changes
  useEffect(() => {
    const newWinLines = checkBingo();
    setWinLines(newWinLines);
  }, [cells, checkBingo, playRandomExplosionSound]);

  // Play sound if the number of winLines has increased or decreased, but not when it becomes 0
  useEffect(() => {
    if (
      winLines.length !== prevWinLinesLengthRef.current.length &&
      winLines.length !== 0
    ) {
      playRandomExplosionSound(4);
    }
    prevWinLinesLengthRef.current = winLines;
  }, [winLines, playRandomExplosionSound]);

  // Call generateRandomCard when the component is mounted
  useEffect(() => {
    generateRandomCard();
  }, [generateRandomCard]);

  return (
    <>
      <div className="bingo-container">
        <div className={`bingo-card ${winLines.length > 0 ? "win" : ""}`}>
          {cardPhrases.map((phrase, index) => (
            <BingoCell
              key={index}
              phrase={phrase}
              onClick={() => toggleCell(index)}
              active={index === 12 || cells[index]}
              win={winLines.some((line) => line.includes(index))}
            />
          ))}
        </div>
      </div>
      {winLines.length > 0 && (
        <>
          {/* Added winLines.length as key to WinAnimation */}
          <div key={winLines.length}>
            <WinAnimation show={winLines.length > 0} />
            <FireworksDisplay show={winLines.length > 0} />
          </div>
        </>
      )}
    </>
  );
};

export default BingoCard;
