import { useCallback, useEffect, useRef, useState } from "react";

import BingoCell from "./BingoCell";
import useCardPhrases from "../hooks/useCardPhrases";

const BingoCard = () => {
  const { cardPhrases, generateRandomCard } = useCardPhrases();
  const [cells, setCells] = useState(Array(25).fill(false));
  const [winLines, setWinLines] = useState([]);
  const prevWinLinesLengthRef = useRef(0);

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

    const winningLines = lines.filter((line) =>
      line.every((index) => cells[index] || index === 12)
    );
    return winningLines;
  }, [cells]);

  useEffect(() => {
    const newWinLines = checkBingo();
    setWinLines(newWinLines);

    prevWinLinesLengthRef.current = newWinLines.length;
  }, [checkBingo]);

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
          <div key={winLines.length}>
            <h3>You win!</h3>
          </div>
        </>
      )}
    </>
  );
};

export default BingoCard;
