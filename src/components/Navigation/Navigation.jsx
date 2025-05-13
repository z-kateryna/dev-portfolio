import "./Navigation.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/icons/logo.svg";
import Arrow from "../../assets/icons/arrow-up.svg";
import Git from "../../assets/icons/github.svg";
import LinkdeIn from "../../assets/icons/linkedIn.svg";
import Email from "../../assets/icons/email.svg";
import HamburgerMenu from "../../assets/icons/hamburger.svg";
import ArrowLight from "../../assets/icons/arrowuplight.svg";

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            <NavLink to="/" className="nav__link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav__link">
              About
            </NavLink>
          </li>
          <li>
             <a
              className="nav__link"
              target="_blank"
              rel="noopener noreferrer"
              href=" https://kzabrodska.netlify.app"
            >
              UX/UI Design
              <img
                src={Arrow}
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
              href="https://docs.google.com/document/d/1rblVUZ6f4v9JpZd6YIBNR5zUAh2Z8cgW/edit?usp=sharing&ouid=111396631844579547834&rtpof=true&sd=true"
            >
              Resume
              <img
                src={Arrow}
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
              <img className="nav__icon" src={LinkdeIn} alt="LinkdeIn icon" />
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
          src={HamburgerMenu}
          onClick={toggleMenu}
          alt="hamburger menu icon"
        />
      </div>
      <div
        className={`nav__hamburger--container ${menuOpen ? "open" : "closed"}`}
      >
        <ul className="nav__hamburger--links">
          <li className="nav__hamburger--item">
            <NavLink to="/" className="nav__hamburger__link">
              Home
            </NavLink>
          </li>
          <li className="nav__hamburger--item">
            <NavLink to="/about" className="nav__hamburger__link">
              About
            </NavLink>
          </li>
          <li className="nav__hamburger--item">
            <a
              className="nav__hamburger__link"
              target="_blank"
              rel="noopener noreferrer"
              href=" https://kzabrodska.netlify.app"
            >
              UX/UI Design
              <img
                src={ArrowLight}
                alt="arrow up icon"
                className="nav__link--icon"
              />
            </a>
          </li>
          <li className="nav__hamburger--item">
            <a
              className="nav__hamburger__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://docs.google.com/document/d/1rblVUZ6f4v9JpZd6YIBNR5zUAh2Z8cgW/edit?usp=sharing&ouid=111396631844579547834&rtpof=true&sd=true"
            >
              Resume
              <img
                src={ArrowLight}
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
              <img className="nav__icon" src={LinkdeIn} alt="LinkdeIn icon" />
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
