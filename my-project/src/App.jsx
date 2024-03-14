// App.jsx
import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar";
import AllRouting from "./components/AllRouting";

const App = () => {
  
  return (
    <div>
      {/* {isLogin ? <LoginPage togglePage={togglePage} /> : <SignupPage togglePage={togglePage} />} */}
      <NavBar />
      <AllRouting />
    </div>
  );
};

export default App;
