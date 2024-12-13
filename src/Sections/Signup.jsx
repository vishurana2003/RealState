import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // useNavigate hook

  const handleSignup = () => {
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('All fields are required.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setLoading(true);

    // Simulating a signup request
    setTimeout(() => {
      setLoading(false);
      navigate('/login'); // Navigate to login page after signup
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
    <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 min-h-screen flex justify-center items-center">
      <div
        data-aos="zoom-in"
        className="bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md"
      >
        <h1 className="text-4xl text-white font-semibold mb-6 text-center">Signup</h1>

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
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label className="text-xl text-white">Confirm Password:</label>
        <input
          type="password"
          className="w-full p-3 mb-6 bg-gray-700 text-white rounded-lg"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button
          onClick={handleSignup}
          disabled={loading}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-semibold transition-transform transform hover:scale-105 active:scale-95 disabled:bg-gray-600"
        >
          {loading ? 'Signing up...' : 'Signup'}
        </button>
      </div>
    </div>
  );
};

export default Signup;
