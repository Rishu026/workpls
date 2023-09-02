import React, { useState } from "react";

import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        North-East Tea Gardens 
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/Alld">Search Data</NavLink>
        </li>
        <li>
          <NavLink to ="/Metadata">Meta-data</NavLink>
        </li>
        <li>
        <NavLink to ="/Login">LogIn</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;