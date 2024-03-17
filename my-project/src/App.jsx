// App.jsx
import React, { useState, createContext, useEffect } from "react";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AllRouting from "./components/AllRouting";
export const ThemeContext = createContext(null);
const App = () => {
  //################Functions for darkmode############################
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme == "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const switchTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };
  //#########################################################################

  return (
    <ThemeContext.Provider
      value={{ theme, switchTheme }}
      className="scrollbar-webkit scorllbar-thin"
    >
      {/* {isLogin ? <LoginPage togglePage={togglePage} /> : <SignupPage togglePage={togglePage} />} */}
      <NavBar />
      <AllRouting />
    </ThemeContext.Provider>
  );
};

export default App;
