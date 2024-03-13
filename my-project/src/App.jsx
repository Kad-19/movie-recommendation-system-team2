// App.jsx
import React, { useState } from 'react';
import LoginPage from './LoginPage';
import SignupPage from './SignupPage';

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const togglePage = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <LoginPage togglePage={togglePage} /> : <SignupPage togglePage={togglePage} />}
    </div>
  );
};

export default App;
