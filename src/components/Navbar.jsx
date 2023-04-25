import React from "react";
import { useTheme } from "../theme/ThemeContext";

const Navbar = () => {
  const { renderThemeToggleButton } = useTheme();

  return (
    <div className="navbar">
      <h1>Video Conference Bingo</h1>
      {renderThemeToggleButton()}
    </div>
  );
};

export default Navbar;
