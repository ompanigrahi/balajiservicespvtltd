import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav>
        <div className="nav-first">
          <Link to="/">
            <h1>Logo</h1>
          </Link>
        </div>
        <div className="nav-second">
          <ul>
            <li>
              <Link to="/">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link to="/service">
                <h3>Services</h3>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <h3>About</h3>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <h3>Contact</h3>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
