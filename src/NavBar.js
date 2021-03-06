import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="nav-main">
      <ul>
        <li className="nav-main-item">
          <Link to="/tournaments">Tournaments</Link>
        </li>
        <li className="nav-main-item">
          <Link to="/teams">Teams</Link>
        </li>
        <li className="nav-main-item">
          <Link to="/people">People</Link>
        </li>
        <li className="nav-main-item">
          <Link to="/venues">Venues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
