import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <div className={styles.contactContainer}>
            <Nav />
            <div className={styles.contactContent}>
                <h1>Contact Us</h1>
                <img src="/assets/contact/contact-us.jpg" alt="Contact" className={styles.contactImage} />
                <p>We will be happy to help with any queries, and hopefully meet you soon!</p>

                {/* New wrapper for contact details and map */}
                <div className={styles.contactInfoWrapper}>
                    <div className={styles.contactDetails}>
                        <div className={styles.contactItem}>
                            <img src="/assets/icons/pin.png" alt="Location" className={styles.contactImageIcon} />
                            <p>Stelida, Naxos, Cyclades</p>
                            <p>South Aegean, 84300, Greece</p>
                        </div>
                        <div className={styles.contactItem}>
                            <img src="/assets/icons/mail.png" alt="Email" className={styles.contactImageIcon} />
                            <p>Email: <a href="mailto:auroranaxos@gmail.com">auroranaxos@gmail.com</a></p>
                        </div>
                        <div className={styles.contactItem}>
                            <img src="/assets/icons/call.png" alt="Phone" className={styles.contactImageIcon} />
                            <p>Phone: <a href="tel:+30">+30 </a></p>
                        </div>
                    </div>

                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12065.45261530593!2d25.354523!3d37.082062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14980ba950ef4381%3A0xfa47fa5a80eba116!2sVilla%20Aurora!5e0!3m2!1sen!2sus!4v1682420710543!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Villa Aurora Map"
                            className={styles.map}
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;