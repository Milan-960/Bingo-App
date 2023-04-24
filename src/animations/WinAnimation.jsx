import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const WinAnimation = ({ show }) => {
  const [messageVisible, setMessageVisible] = useState(true);
  const animationRef = useRef(null);

  useEffect(() => {
    if (show) {
      const timeline = gsap.timeline({ repeat: -1 });
      timeline
        .to(
          animationRef.current,
          { duration: 2, rotation: 360, ease: "none" },
          0
        )
        .to(
          animationRef.current,
          {
            duration: 1,
            scale: 1.3,
            opacity: 0.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
          },
          0
        );
      setTimeout(() => {
        setMessageVisible(false);
      }, 4000);
    } else {
      setMessageVisible(true);
    }
  }, [show]);

  const handleClick = () => {
    setMessageVisible(false);
  };

  return (
    <div
      className={`win-animation ${show ? "show" : ""}`}
      onClick={handleClick}
    >
      {messageVisible && (
        <div ref={animationRef} className="win-message">
          🎉 You won The Game! 🎉
        </div>
      )}
    </div>
  );
};

export default WinAnimation;
