import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="logo-link">
        {/* Logo link */}
        <Link to="/">MarkMoses</Link>
      </div>
      <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              {/* Navigation Links */}
              <Link to="/" onClick={handleMenuToggle}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleMenuToggle}>
                About
              </Link>
            </li>
            <li>
              <Link to="/portfolio" onClick={handleMenuToggle}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleMenuToggle}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="menu-toggle" onClick={handleMenuToggle}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
}

export default Header;
