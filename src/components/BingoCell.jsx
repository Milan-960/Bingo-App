import useSound from "use-sound";
import selectSound from "../sounds/click.mp3";

const BingoCell = ({ phrase, onClick, active, win }) => {
  const [playSelect] = useSound(selectSound);

  const handleClick = () => {
    playSelect();
    onClick();
  };

  return (
    <>
      <div
        className={`bingo-cell ${active ? "active" : ""} ${win ? "win" : ""}`}
        onClick={handleClick}
      >
        <span>{phrase}</span>
      </div>
    </>
  );
};

export default BingoCell;
