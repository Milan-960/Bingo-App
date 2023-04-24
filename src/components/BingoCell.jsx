const BingoCell = ({ phrase, onClick, active, win }) => {
  const handleClick = () => {
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
