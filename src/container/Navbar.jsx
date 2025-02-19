import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-black to-gray-700 px-4 text-white fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between lg:justify-around items-center">
        <div className="w-32">
          <Link to="/">
            <img src="/images/logo.png" alt="Logo" className="h-20 w-32" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-8 text-lg">
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/">Home</Link>
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/service">Service</Link>
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/about">About</Link>
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/contact">Contact</Link>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden flex flex-col bg-gray-800 text-white py-4 space-y-4 px-6 relative">
          <button className="absolute top-2 right-4" onClick={() => setIsOpen(false)}>
            <X className="h-6 w-6 text-white" />
          </button>
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/service" onClick={() => setIsOpen(false)}>Service</Link>
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link className="hover:text-[#2fe29e] transition duration-150" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

