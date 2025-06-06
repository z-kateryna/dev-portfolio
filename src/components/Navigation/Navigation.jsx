import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import Arrow from "../../assets/icons/arrow-up.svg";
import ArrowDark from "../../assets/icons/arrow-dark.svg";
import ArrowLight from "../../assets/icons/arrowuplight.svg";
import Git from "../../assets/icons/github.svg";
import LinkdeIn from "../../assets/icons/linkedIn.svg";
import Email from "../../assets/icons/email.svg";
import HamburgerMenu from "../../assets/icons/hamburger.svg";
import CloseIcon from "../../assets/icons/close.svg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredHamburgerLink, setHoveredHamburgerLink] = useState(null);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="nav">
      <div className="nav__wrapper">
        <NavLink to="/" className="nav__logo">
          <img src={Logo} alt="KZ logo" />
        </NavLink>

        <ul className="nav__links-container">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav__link nav__link--active" : "nav__link"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <a
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://kzabrodska.com"
              onMouseEnter={() => setHoveredLink("design")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              UX/UI Design
              <img
                src={hoveredLink === "design" ? ArrowDark : Arrow}
                alt="arrow up icon"
                className="nav__link--icon"
              />
            </a>
          </li>
          <li>
            <a
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1rblVUZ6f4v9JpZd6YIBNR5zUAh2Z8cgW"
              onMouseEnter={() => setHoveredLink("resume")}
              onMouseLeave={() => setHoveredLink(null)}
            >
              Resume
              <img
                src={hoveredLink === "resume" ? ArrowDark : Arrow}
                alt="arrow up icon"
                className="nav__link--icon"
              />
            </a>
          </li>
        </ul>

        <ul className="nav__icons-container">
          <li>
            <a
              className="nav__icon--link"
              href="https://github.com/z-kateryna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="nav__icon" src={Git} alt="github icon" />
            </a>
          </li>
          <li>
            <a
              className="nav__icon--link"
              href="https://www.linkedin.com/in/kzabrodska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="nav__icon" src={LinkdeIn} alt="LinkedIn icon" />
            </a>
          </li>
          <li>
            <a
              className="nav__icon--link"
              href="mailto:zabrodskakateryna@gmail.com"
            >
              <img className="nav__icon" src={Email} alt="Email icon" />
            </a>
          </li>
        </ul>

        <img
          className="nav__hamburger--icon"
          src={menuOpen ? CloseIcon : HamburgerMenu}
          alt={menuOpen ? "close menu icon" : "open menu icon"}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
        />
      </div>

      <div
        className={`nav__hamburger--container ${menuOpen ? "open" : "closed"}`}
      >
        <ul className="nav__hamburger--links">
          <li className="nav__hamburger--item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "nav__hamburger__link nav__hamburger__link--active"
                  : "nav__hamburger__link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="nav__hamburger--item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "nav__hamburger__link nav__hamburger__link--active"
                  : "nav__hamburger__link"
              }
            >
              About
            </NavLink>
          </li>
          <li
            className="nav__hamburger--item"
            onMouseEnter={() => setHoveredHamburgerLink("design")}
            onMouseLeave={() => setHoveredHamburgerLink(null)}
          >
            <a
              className="nav__hamburger__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://kzabrodska.com"
            >
              UX/UI Design
              <img
                src={hoveredHamburgerLink === "design" ? ArrowDark : ArrowLight}
                alt="arrow up icon"
                className="nav__link--icon"
              />
            </a>
          </li>
          <li
            className="nav__hamburger--item"
            onMouseEnter={() => setHoveredHamburgerLink("resume")}
            onMouseLeave={() => setHoveredHamburgerLink(null)}
          >
            <a
              className="nav__hamburger__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1rblVUZ6f4v9JpZd6YIBNR5zUAh2Z8cgW"
            >
              Resume
              <img
                src={hoveredHamburgerLink === "resume" ? ArrowDark : ArrowLight}
                alt="arrow up icon"
                className="nav__link--icon"
              />
            </a>
          </li>
        </ul>

        <ul className="nav__hamburger__icons-container">
          <li>
            <a
              className="nav__icon--link"
              href="https://github.com/z-kateryna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="nav__icon" src={Git} alt="github icon" />
            </a>
          </li>
          <li>
            <a
              className="nav__icon--link"
              href="https://www.linkedin.com/in/kzabrodska"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="nav__icon" src={LinkdeIn} alt="LinkedIn icon" />
            </a>
          </li>
          <li>
            <a
              className="nav__icon--link"
              href="mailto:zabrodskakateryna@gmail.com"
            >
              <img className="nav__icon" src={Email} alt="Email icon" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
