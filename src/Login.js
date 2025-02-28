import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === '1' && password === '2') {
      navigate('/home');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#fafafa]">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6 space-y-6">
        <div className="flex justify-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
            className="w-36 h-36"
          />
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Phone number, username, or email"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-md hover:from-blue-400 hover:to-pink-400 focus:ring-2 focus:ring-blue-500">
            Log In
          </button>
        </form>
        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-500 hover:underline">
            Forgot password?
          </a>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Sign up
            </a>
          </p>
        </div>
      </div>
      <div className="mt-4 text-sm text-gray-600">
        <p>
          Instagram from Meta. <span className="text-blue-500 hover:underline">Terms</span> ·{' '}
          <span className="text-blue-500 hover:underline">Privacy</span> ·{' '}
          <span className="text-blue-500 hover:underline">Cookies</span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
