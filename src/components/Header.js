import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css"

export default function Header() {
  return (
    <nav>
      <div className="navBar">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/characters">Characters</NavLink></li>
          <li><NavLink to="locations">Locations</NavLink></li>
          <li><NavLink to="episodes">Episodes</NavLink></li>
        </ul>
        </div>
      </nav>
  );
}
