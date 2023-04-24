import { createContext, useContext, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Button for theme changing
  const renderThemeToggleButton = () => {
    return (
      <label className="switch">
        <input
          type="checkbox"
          className="theme-toggle-input"
          onClick={toggleTheme}
        />
        <span className="slider round">
          {theme === "dark" ? (
            <FiMoon className="toggle-icon" size={20} />
          ) : (
            <FiSun className="toggle-icon" size={20} />
          )}
        </span>
      </label>
    );
  };

  return (
    <ThemeContext.Provider
      value={{ theme, toggleTheme, renderThemeToggleButton }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
