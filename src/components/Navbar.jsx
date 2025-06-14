"use client";

import { useState } from "react";
import { Bell, UserCircle2, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray border-b shadow-sm px-4 py-2">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Heading */}
        <div className="text-xl font-bold text-indigo-600">Blogify</div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          <UserCircle2 className="w-6 h-6 text-gray-600 cursor-pointer" />
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-2">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <div className="flex items-center space-x-4 px-1 pt-2 border-t">
            <Bell className="w-5 h-5 text-gray-600" />
            <UserCircle2 className="w-6 h-6 text-gray-600" />
          </div>
        </div>
      )}
    </nav>
  );
}
