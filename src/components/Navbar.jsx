"use client";

import { useState, useContext } from "react";
import { Bell, UserCircle2, Menu, X } from "lucide-react";
import { SearchContext } from "../context/SearchContext";
import { AuthContext } from "@/context/AuthContext"; 

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-900 border-b shadow-sm px-4 py-2 text-white relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo / Heading */}
        <div className="text-xl font-bold text-indigo-400">Blogify</div>

        {/* Desktop Search */}
        <div className="hidden md:flex flex-1 justify-center px-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-md px-3 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center space-x-4 relative">
          <Bell className="w-5 h-5 text-gray-400 cursor-pointer" />
          <div className="relative">
            <UserCircle2
              className="w-6 h-6 text-gray-300 cursor-pointer"
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            />
            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-10">
                {user ? ( 
                  <>
                    <a
                      href="/profile"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Profile
                    </a>
                    <button
                      href="/logout"
                      className="block px-4 py-2 hover:bg-gray-100"
                      onClick={
                        async ()=>{
                          await fetch('api/auth/logout')
                          window.location.href = "/posts";
                        }
                      }

                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <a
                    href="/login"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Login
                  </a>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-300" />
            ) : (
              <Menu className="w-6 h-6 text-gray-300" />
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
            className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="flex items-center space-x-4 px-1 pt-2 border-t border-gray-700">
            <Bell className="w-5 h-5 text-gray-400" />
            <div className="relative">
              <UserCircle2
                className="w-6 h-6 text-gray-300 cursor-pointer"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              />
              {profileDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-lg z-10">
                  {user ? ( 
                    <>
                      <a
                        href="/profile"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Profile
                      </a>
                      <a
                        href="/logout"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        Logout
                      </a>
                    </>
                  ) : (
                    <a
                      href="/login"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Login
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
