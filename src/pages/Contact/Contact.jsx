import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./Contact.module.css";

function Contact() {
    return (
        <div className={`${styles.contactContainer} ${styles.contactPage}`}>
            <Nav />
            
            {/* Separate banner div */}
            <div className={styles.imageBanner}>
                <img src="/assets/contact/contact-us.jpg" alt="Contact" className={styles.contactImage} />
                <h1 className={styles.mainTitle}>Contact Us</h1>
            </div>

            {/* Content container */}
            <div className={styles.contactContent}>
                <div className={styles.contactSections}>
                    {/* Left Column - Contact Information */}
                    <div className={styles.infoColumn}>
                        <section className={styles.contactSection}>
                            <img src="/assets/icons/email-icon.png" alt="Email" className={styles.icon} />  
                            <p className={styles.sectionText}>
                                <a href="mailto:auroranaxos@gmail.com">auroranaxos@gmail.com</a>
                            </p>
                        </section>

                        <hr className={styles.divider} />

                        <section className={styles.contactSection}>
                            <img src="/assets/icons/phone-icon.png" alt="Phone" className={styles.icon} />
                            <p className={styles.sectionText}>
                                <a href="tel:+30XXXXXXXXXX">Tel +30 XXXXXXXX</a>
                            </p>
                        </section>

                        <hr className={styles.divider} />

                        <section className={styles.contactSection}>
                            <img src="/assets/icons/location-icon.png" alt="Location" className={styles.icon} />
                            <p className={styles.sectionText}>
                                Stelida, Naxos, Cyclades<br />
                                South Aegean, 84300, Greece
                            </p>
                        </section>

                        <div className={styles.mapContainer}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12065.45261530593!2d25.354523!3d37.082062!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14980ba950ef4381%3A0xfa47fa5a80eba116!2sVilla%20Aurora!5e0!3m2!1sen!2sus!4v1682420710543!5m2!1sen!2sus"
                                width="100%"
                                height="300"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Villa Aurora Map"
                            />
                        </div>

                        <svg className={`${styles.separator} m-auto my-10 custom-color`} width="300" viewBox="0 0 687 155" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="#04384B" strokeWidth="7" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 58c27-13.33333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.66666667 80.5 20" opacity=".1"></path>
                            <path d="M20 78c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".2"></path>
                            <path d="M20 98c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20" opacity=".6"></path>
                            <path d="M20 118c27-13.3333333 54-20 81-20 40.5 0 40.5 20 81 20s40.626917-20 81-20 40.123083 20 80.5 20 40.5-20 81-20 40.5 20 81 20 40.626917-20 81-20c26.915389 0 53.748722 6.6666667 80.5 20"></path>
                        </g>
                        </svg>


                        

                    </div>

                    {/* Right Column - Forms */}
                    <div className={styles.formColumn}>
                        <section className={styles.formSection}>
                            <h2 className={styles.sectionTitle}>Send a message</h2>
                            <form className={styles.contactForm}>
                                <div className={styles.formGroup}>
                                    <input 
                                        type="text" 
                                        placeholder="Name" 
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <input
                                        type="email"
                                        placeholder="Enter email address"
                                        className={styles.formInput}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <textarea
                                        placeholder="Enter your message"
                                        className={styles.formTextarea}
                                        rows="5"
                                    />
                                </div>
                                <button type="submit" className={styles.submitButton}>
                                    Send Message
                                </button>
                            </form>
                        </section>
                        <div className={styles.extraInfo}>
                            <p>We will be happy to help with any queries, and hopefully meet you soon!</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;