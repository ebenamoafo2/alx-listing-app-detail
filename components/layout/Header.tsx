// components/layout/Header.tsx
import React from "react";
import Link from "next/link";

const accommodationTypes = ["Rooms", "Mansion", "Countryside", "Villa", "Apartment"];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.png" // remember to replace with your logo
            alt="Project Airbnb Logo"
            className="h-10 w-auto"
          />
          <span className="font-bold text-xl text-gray-800">Project Airbnb</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 mx-6">
          <input
            type="text"
            placeholder="Search destinations, properties, etc."
            className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Sign In / Sign Up Buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/signin">
            <button className="px-4 py-2 rounded-full border border-blue-500 text-blue-500 hover:bg-blue-50 transition">
              Sign In
            </button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Accommodation Types Navigation */}
      <nav className="bg-gray-50 py-2 shadow-inner">
        <div className="container mx-auto flex space-x-6 overflow-x-auto">
          {accommodationTypes.map((type) => (
            <button
              key={type}
              className="whitespace-nowrap px-3 py-1 rounded-full hover:bg-blue-100 transition text-gray-700"
            >
              {type}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
