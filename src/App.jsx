import React from "react";
import { Container } from "@mui/material";
import { useTheme } from "./theme/ThemeContext";

import "./styles/Globle.scss";
import BingoCard from "./components/BingoCard";
import Navbar from "./components/Navbar";
const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className={`appContainer ${theme}`}>
        <Navbar />
        <div className="App-wrapper">
          <Container maxWidth="sm">
            <BingoCard />
          </Container>
        </div>
      </div>
    </>
  );
};

export default App;
