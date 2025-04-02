import { useState, useRef } from "react";
import navCSS from "./../Navbar/Nav.module.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo/logo.png"; 

function Nav() {
  const menu = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuHandler = () => {
    menu.current.classList.toggle(navCSS.activeNav);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    menu.current.classList.remove(navCSS.activeNav);
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = (e) => {
    e.preventDefault();
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <nav className={navCSS.navbar}>
      <div className={navCSS.logo}>
        <Link to="/">
          <img src={logo} alt="Aurora Naxos Logo" className={navCSS.logoImage} />
        </Link>
      </div>
      <ul ref={menu} className={navCSS.navMenu}>
        <li>
          <Link to="/" onClick={handleMenuItemClick}>Home</Link>
        </li>
        <li>
          <Link to="/About" onClick={handleMenuItemClick}>Our Story</Link>
        </li>
        <li>
          <Link to="/Villas" onClick={handleMenuItemClick}>The Villas</Link>
        </li>
        <li className={navCSS.dropdown}>
          <span onClick={toggleDropdown} className={navCSS.dropdownToggle}>
            Discover Naxos
          </span>
          {isDropdownOpen && (
            <ul className={navCSS.dropdownMenu}>
              <li>
                <Link to="/AboutInfo" onClick={handleMenuItemClick}>
                  About Naxos
                </Link>
              </li>
              <li>
                <Link to="/Beaches" onClick={handleMenuItemClick}>
                  Naxos Beaches
                </Link>
              </li>
              <li>
                <Link to="/Activities" onClick={handleMenuItemClick}>
                  Activities
                </Link>
              </li>
              <li>
                <Link to="/Infos" onClick={handleMenuItemClick}>
                  Useful Links
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/Contact" onClick={handleMenuItemClick}>Contact</Link>
        </li>
      </ul>
      <i
        className={isMenuOpen ? "ri-close-line" : "ri-menu-line"}
        id={navCSS.bars}
        onClick={menuHandler}
      ></i>
    </nav>
  );
}

export default Nav;

