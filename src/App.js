import React from "react";
import { useTheme } from "./theme/ThemeContext";

import "./styles/Globle.scss";
import BingoCard from "./components/BingoCard";

const App = () => {
  const { theme, renderThemeToggleButton } = useTheme();

  return (
    <>
      <div className={`container ${theme}`}>
        <div className="App-wrapper">
          <div className="App-theme">
            {renderThemeToggleButton()}
            <h1>Video Conference Bingo</h1>
          </div>

          <BingoCard />
        </div>
      </div>
    </>
  );
};

export default App;
