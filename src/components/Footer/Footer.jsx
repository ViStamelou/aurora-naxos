import footerCSS from "./Footer.module.css"; 
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className={footerCSS.footer}>
      {/* SVG Wave */}
      <div className={footerCSS.waveContainer}>
        <svg className={footerCSS.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="white" d="M0,160L80,149.3C160,139,320,117,480,122.7C640,128,800,160,960,181.3C1120,203,1280,213,1360,218.7L1440,224V0H0Z"></path>
        </svg>
      </div>

      <div className={footerCSS.footerContent}>
        {/* Logo */}
        <div className={footerCSS.logoSection}>
          <img src="assets/logo/logo2.png" alt="Aurora Naxos Logo" className={footerCSS.logoImage} />
        </div>


        {/* Footer Sections */}
        <div className={footerCSS.footerSections}>
          {/* Address */}
          <div className={footerCSS.footerColumn}>
            <h3>OUR ADDRESS</h3>
            <p><strong>Agios Prokopios-Stelida</strong></p>
            <p>Naxos Island, 84300, GR</p>
          </div>

          {/* Reservation */}
          <div className={footerCSS.footerColumn}>
            <h3>RESERVATION</h3>
            <p>Email: <a href="mailto:auroranaxos@gmail.com">auroranaxos@gmail.com</a></p>
            <p>Tel:<a href="tel:+30">+30 </a></p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className={footerCSS.socialIcons}>
          <a href="#" aria-label="Facebook"><FaFacebookF /></a>
          <a href="#" aria-label="Instagram"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className={footerCSS.copyright}>&copy; 2025 Aurora Villas Naxos. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;



