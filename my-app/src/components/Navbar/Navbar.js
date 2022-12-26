import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div class="nav-wrapper container">
        <Link to="/" class="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
