import React, { useEffect, useState } from "react";
import { Fireworks } from "@fireworks-js/react";

const FireworksDisplay = ({ show }) => {
  const [visible, setVisible] = useState(false);

  const options = {
    colors: ["#ff4136", "#0074d9", "#2ecc40", "#b10dc9"],
    calc: (props, i) => ({
      ...props,
      x: (i + 1) * (window.innerWidth / 5) - (i + 1) * 30,
      y: window.innerHeight - (100 + Math.random() * 100),
    }),
  };

  const style = {
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "fixed",
  };

  useEffect(() => {
    if (show) {
      setVisible(true);
      setTimeout(() => {
        setVisible(false);
      }, 4000);
    }
  }, [show]);

  return (
    <>
      <div
        className={visible ? "show" : "hide"}
        style={style}
        onClick={() => setVisible(false)}
      >
        <Fireworks style={style} options={options} />
      </div>
    </>
  );
};

export default FireworksDisplay;
