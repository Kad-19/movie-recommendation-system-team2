// App.jsx
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';
import HomePage from './components/HomePage';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {/* {isLogin ? <LoginPage togglePage={togglePage} /> : <SignupPage togglePage={togglePage} />} */}
      <HomePage/>
    </div>
  );
};

export default App;
