import useSound from "use-sound";
import Ink from "react-ink";

import selectSound from "../sounds/click.mp3";

const BingoCell = ({ phrase, onClick, active, win, fixedSize }) => {
  const [playSelect] = useSound(selectSound);

  const handleClick = () => {
    playSelect();
    onClick();
  };

  return (
    <>
      <div
        className={`bingo-cell ${active ? "active" : ""} ${
          fixedSize ? "bingo-cell-size" : ""
        }`}
        onClick={handleClick}
      >
        <div className={`bingo-cell-span ${win ? "win" : ""}`}>
          <span>{phrase}</span>
          <Ink />
        </div>
      </div>
    </>
  );
};

export default BingoCell;
