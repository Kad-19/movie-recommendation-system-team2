// App.jsx
import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import Movie from "./components/Movie";
import NavBar from "./components/NavBar";

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {/* {isLogin ? <LoginPage togglePage={togglePage} /> : <SignupPage togglePage={togglePage} />} */}
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
