"use client";

import React, { useState } from "react";
import axios from "axios"; 

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password1: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.password || !formData.password1){
      alert('please fill all the details')
      return;
    }
    if (formData.password !== formData.password1) {
      alert("Both passwords should be the same");
      return;
    }

    try {
      const result = await axios.post("/api/auth/signup", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup success:", result.data);
      alert("Signup successful!");
    } catch (err) {
      console.error("Signup error:", err.response?.data || err.message);
      alert("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="bg-gray border-2 p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-white text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              name="password"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-6">
            <label className="block text-white text-sm font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="********"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              onChange={(e) => setFormData({ ...formData, password1: e.target.value })}
              name="password1"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Sign Up
          </button>

          {/* Already have an account */}
          <p className="mt-4 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-400 hover:underline font-medium">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
