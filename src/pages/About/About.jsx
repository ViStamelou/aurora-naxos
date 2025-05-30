import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./About.module.css";

import Icon1 from "/assets/about/fish.png";
import Icon2 from "/assets/about/fish.png";
import Icon3 from "/assets/about/fish.png";

function About() {
  return (
    <>
      <Nav />
      <section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          {/* Text Column */}
          <div className={styles.aboutText}>
            <h3>AURORA NAXOS</h3>
            <h1>Meet Your Hosts</h1>
            <p>
             We are a passionate couple who loves to travel and explore new cultures. With a shared devotion for hospitality, we’ve created Aurora Villas to offer guests the ultimate Naxos experience. Dedicated to ensuring every stay is memorable, we go above and beyond to provide warm, personalized service and make you feel right at home.
            </p>
            <p className={styles.aboutSignature}>Dimitris & Yiota Sergis</p>
            <p className={styles.aboutOwner}>DIMITRIS & YIOTA SERGIS - THE OWNERS</p>
          </div>
          
          {/* Image Column */}
          <div className={styles.aboutImage}>
            {/* Replace with your actual image path */}
            <img 
              src="/assets/about/owners.jpg" 
              alt="Dimitris & Yiota, owners of Aurora Naxos" 
            />
          </div>
        </div>

          {/* Add this new icons section */}
        <div className={styles.decorativeIcons}>
          <img 
            src={Icon1} 
            alt="" 
            className={styles.decorativeIcon} 
            aria-hidden="true"
          />
          <img 
            src={Icon2} 
            alt="" 
            className={styles.decorativeIcon} 
            aria-hidden="true"
          />
          <img 
            src={Icon3} 
            alt="" 
            className={styles.decorativeIcon} 
            aria-hidden="true"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default About;


