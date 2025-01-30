import { useRef } from "react";
import navCSS from "./../Navbar/Nav.module.css";
import { Link } from "react-router-dom";
import logo from "/assets/logo/logo.png"; // Adjust path if needed

function Nav() {
    const menu = useRef();

    const menuHandler = () => {
        menu.current.classList.toggle(navCSS.activeNav);
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
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">Our Story</Link>
                </li>
                <li>
                    <Link to="/Villas">The Villas</Link>
                </li>
                <li>
                    <Link to="/Discover">Discover Naxos</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <i className="ri-menu-line" id={navCSS.bars} onClick={menuHandler}></i>
        </nav>
    );
}

export default Nav;
