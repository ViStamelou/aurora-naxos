import footerCSS from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTripadvisor } from "react-icons/fa";

function Footer() {
  // Get the current year dynamically
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerCSS.footer}>
      {/* SVG Wave */}
      <div className={footerCSS.waveContainer}>
        <svg className={footerCSS.wave} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="white" d="M0,256L48,234.7C96,213,192,171,288,181.3C384,192,480,256,576,266.7C672,277,768,235,864,202.7C960,171,1056,149,1152,154.7C1248,160,1344,192,1392,208L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
        </svg>
      </div>

      <div className={footerCSS.footerContent}>
        <div className={footerCSS.mainContent}>
          {/* Logo Section */}
          <div className={footerCSS.logoSection}>
            <img src="assets/logo/logo2.png" alt="Aurora Naxos Logo" className={footerCSS.logoImage} />
          </div>

          {/* Footer Sections */}
          <div className={footerCSS.infoSections}>
            {/* Address */}
            <div className={footerCSS.footerColumn}>
              <h3 className={footerCSS.footerTitle}>OUR ADDRESS</h3>
              <p><strong className={footerCSS.footerStrong}>Agios Prokopios-Stelida</strong></p>
              <p className={footerCSS.footerAddress}>Naxos Island, 84300, GR</p>
            </div>

            {/* Reservation */}
            <div className={footerCSS.footerColumn}>
              <h3 className={footerCSS.footerTitle}>RESERVATION</h3>
              <p className={footerCSS.footerEmail}>Email: <a href="mailto:auroranaxos@gmail.com" className={footerCSS.footerLink}>auroranaxos@gmail.com</a></p>
              <p className={footerCSS.footerTel}>Tel: <a href="tel:+30" className={footerCSS.footerLink}>+30</a></p>
            </div>

            {/* Follow Us */}
            <div className={footerCSS.footerColumn}>
              <h3 className={footerCSS.footerTitle}>FOLLOW US</h3>
              <div className={footerCSS.socialIcons}>
                <a href="https://www.facebook.com/VillaAuroraNaxos" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className={footerCSS.socialIconLink}>
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/aurora_naxos" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className={footerCSS.socialIconLink}>
                  <FaInstagram />
                </a>
              </div>
            </div>

            {/* Write a review */}
            <div className={footerCSS.footerColumn}>
              <h3 className={footerCSS.footerTitle}>WRITE A REVIEW</h3>
              <div className={footerCSS.socialIcons}>
                <a href="https://www.tripadvisor.com/VacationRentalReview-g805487-d11728240-Aurora_Superior_Villa-Agios_Prokopios_Naxos_Cyclades_South_Aegean.html" aria-label="Tripadvisor" target="_blank" rel="noopener noreferrer" className={footerCSS.socialIconLink}>
                  <FaTripadvisor />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/*Members Section */}
        <div className={footerCSS.memberSection}>
          <p className={footerCSS.memberText}>Members of</p>
          <a href="https://www.optimalodgings.com/en/" target="_blank" rel="noopener noreferrer">
            <img 
              src="/assets/optima_lodgings.png" 
              alt="Partner Logo" 
              className={footerCSS.memberLogo} 
            />
          </a>
        </div>


        {/* Copyright */}
        <p className={footerCSS.copyright}>
          &copy; {currentYear} Aurora Villas Naxos. All Rights Reserved. <br />
          Designed & Created by{" "}
          <a
            href="https://vistamelou.github.io/myportfolio/" 
            target="_blank"
            rel="noopener noreferrer"
            className={footerCSS.creatorLink}
          >
            Vasiliki Stamelou
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;


