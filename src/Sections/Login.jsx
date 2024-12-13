import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
  
    const navigate = useNavigate();

    const handlesignup=()=>{
        navigate('/signup');
    }
  
    const handleClick = () => {
      if (!email || !password) {
        setError('Please enter both email and password');
        return;
      }
  
      setLoading(true);
      setError('');
  
      // Simulate API login
      setTimeout(() => {
        setLoading(false);
        
        // Simulated check for successful login
        if (email != ' ' && password!= ' ') {
          localStorage.setItem('isLoggedIn', 'true'); // Save login status
          navigate('/'); // Redirect to home
        } else {
          setError('Invalid email or password');
        }
      }, 2000);
    };
  
    useEffect(() => {
      AOS.init({
        offset: 200,
        duration: 800,
        easing: 'ease-in-out',
        delay: 100,
      });
    }, []);
  
    return (
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex justify-center items-center">
        <div
          data-aos="zoom-in"
          className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md"
        >
          <h1 className="text-4xl text-white font-semibold mb-6 text-center">Login</h1>
  
          {error && <div className="text-red-500 mb-4">{error}</div>}
  
          <label className="text-xl text-white">Email:</label>
          <input
            type="email"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
  
          <label className="text-xl text-white">Password:</label>
          <input
            type="password"
            className="w-full p-3 mb-6 bg-gray-700 text-white rounded-lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
  
          <button
            onClick={handleClick}
            disabled={loading}
            className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold transition-transform transform hover:scale-105 active:scale-95 disabled:bg-gray-600"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>

          <p className='text-xl text-white font-semibold ml-10 mt-5'>Dont have an account? <button className='text-blue-500' onDoubleClick={handlesignup}>Signup</button></p>
        </div>
      </div>
    );
  }
  
  export default Login;
  