import React from 'react';
import './Navbar.css';


const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <img src="" alt="" />
      </div>
      <ul id='liste' className="navbar-links">
      <li>
          <a className="navbar-link" href="/">Acceuil</a>
        </li>
        <li>
          <a className="navbar-link" href="/Csharp">C#</a>
        </li>
        <li>
          <a className="navbar-link" href="/Kotlin">Kotlin</a>
        </li>
        <li>
          <a className="navbar-link" href="/Swift">Swift</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;