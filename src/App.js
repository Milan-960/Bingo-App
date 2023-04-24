import React from "react";
import { useTheme } from "./theme/ThemeContext";

import "./styles/Globle.scss";

const App = () => {
  const { theme, renderThemeToggleButton } = useTheme();

  return (
    <>
      <div className={`container ${theme}`}>
        <div className="App">
          {renderThemeToggleButton()}
          <h1>Video Conference Bingo</h1>
        </div>
      </div>
    </>
  );
};

export default App;
