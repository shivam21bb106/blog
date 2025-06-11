"use client";

import React from "react";

const LoginForm = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray p-8 rounded-lg shadow-md w-full max-w-md border-2">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password Field */}
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Log In
          </button>

          {/* Forgot Password / Sign Up Links */}
          <div className="mt-4 text-center text-sm text-gray-600">
            <a href="/forgot-password" className="text-indigo-600 hover:underline font-medium">
              Forgot Password?
            </a>
          </div>
          <p className="mt-2 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline font-medium">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
