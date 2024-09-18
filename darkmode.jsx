import { useState } from "react";

function App() {
  // State to manage the current theme
  const [theme, setTheme] = useState("light");

  // Toggle between light and dark modes
  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  // Define styles for light and dark modes
  const lightModeStyles = {
    backgroundColor: "#ffffff",
    color: "#000000",
    minHeight: "100vh",
    padding: "20px",
  };

  const darkModeStyles = {
    backgroundColor: "#333333",
    color: "#ffffff",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div style={theme === "light" ? lightModeStyles : darkModeStyles}>
      <h1>Light/Dark Mode Toggle</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "Dark" : "Light"} Mode
      </button>
      <p>
        This is a {theme} mode example. The background and text colors
        change based on the selected mode.
      </p>
    </div>
  );
}

export default App;
