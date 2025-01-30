import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left w-32 text-white">
<Link to="/">Logo</Link>
        </div>
        <div className="nav-right">
          <Link to="/">Home</Link>
          <Link to="/service">Service</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
        {/* <button className="">Contact Us</button> */}
      </nav>
    </>
  );
}

export default Navbar;
