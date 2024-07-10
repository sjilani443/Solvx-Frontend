// LoginModal.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const LoginModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-outfit">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="bg-gray-800 text-white rounded-lg p-8 w-full max-w-md z-10 relative">
        <button className="absolute top-4 right-4 text-white" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
        <p className="text-gray-400 mb-6 text-center">Please enter your login and password!</p>

        <div className="mb-4">
          <label className="block text-gray-400 mb-2" htmlFor="email">Email address</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
          <input
            className="w-full px-3 py-2 rounded bg-gray-700 text-white"
            type="password"
            id="password"
            placeholder="Enter your password"
          />
        </div>

        <div className="flex justify-between items-center mb-6">
          <a href="#!" className="text-gray-400 hover:text-gray-200 text-sm">Forgot password?</a>
        </div>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded">
          Login
        </button>

        <p className="text-center mt-5">
          Don't have an account? <Link to="/signup" className="text-blue-500 hover:text-blue-400 font-bold">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginModal;
