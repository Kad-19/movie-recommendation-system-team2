import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


const ForgotPasswordPage = () => {
    const [resetMethod, setResetMethod] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [selectedCountry, setSelectedCountry] = useState('');

    const handleResetMethodChange = (e) => {
        setResetMethod(e.target.value);
    };

    const handleResetSubmit = (e) => {
        e.preventDefault();
        // Add logic to send reset instructions based on the selected reset method
        if (resetMethod === 'email') {
            alert(`Sending reset instructions to ${email} via email`);
        } else if (resetMethod === 'text') {
            alert(`Sending reset instructions to ${phoneNumber} via text message`);
        }
    };

    return (
        <div>
          
            <div style={{paddingLeft:'800px'}} className="flex items-center justify-center min-h-screen ">
                <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-300">
                <NavLink to="/signup" className="text-white bg-blue-500 ml-64 mb-8">Sign In</NavLink>
                    <h2 className="text-3xl text-black font-bold mb-8">Forgot Your Password?</h2>
                    <form onSubmit={handleResetSubmit} className="max-w-md">
                        <div className="mb-6">
                            <p className="mb-4 text-black">How would you like to reset your password?</p>
                            <div className="flex items-center mb-2">
                                <input type="radio" id="emailMethod" name="resetMethod" value="email" checked={resetMethod === 'email'} onChange={handleResetMethodChange} />
                                <label htmlFor="emailMethod" className="ml-2 text-black">Email</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input type="radio" id="textMethod" name="resetMethod" value="text" checked={resetMethod === 'text'} onChange={handleResetMethodChange} />
                                <label htmlFor="textMethod" className="ml-2 text-black">Text Message</label>
                            </div>
                        </div>
                        {resetMethod === 'email' && (
                            <div className="mb-6">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                        )}
                        {resetMethod === 'text' && (
                            <div className="mb-6">
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    placeholder="+25194998399"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                               
                               
                            </div>
                        )}
                        <button type="submit" className="w-full px-4 py-2 mb-6 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Send Instructions</button>
                        <h4 className='text-blue-500'> I don't remember my email or phone.</h4>
                    </form>
                </div>
            </div>
        </div>
    );
};
const LoginPage = () => {
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleForgotPassword = () => {
        setIsForgotPassword(true); // Set state to indicate user is on forgot password page
    };

    const handleLogin = (e) => {
        e.preventDefault();
        // Add your login logic here
        alert('Login logic goes here');
    };

    return (
        <div>
            {isForgotPassword ? (
                <ForgotPasswordPage/>
            ) : (
                <div style={{ marginLeft: '800px' }} className="flex items-center justify-center min-h-screen">
                    <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-300">
                        <h2 className="text-3xl text-black font-bold mb-8">Sign In</h2>
                        <form onSubmit={handleLogin} className="max-w-md">
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-700">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder='anarkeli@gmail.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="mb-6">
                                <label htmlFor="password" className="block text-gray-700">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder='anarkeli1234$'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <button type="submit" className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
                        </form>
                        <h4 className="mt-4 text-red-500 cursor-pointer" onClick={handleForgotPassword}>Forgot my password?</h4>
                        <h4 className="mt-4 text-gray-700">
                            Don't have an account? <NavLink to="/signup" className="text-white bg-blue-500">Create Account</NavLink>
                        </h4>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginPage;
