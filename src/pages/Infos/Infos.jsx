import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./Infos.module.css";

function Infos() {
  // Define links with text and URL
  const leftLinks = [
    { text: "Useful telephones of Naxos", url: "https://www.naxos.gr/useful-phone-numbers-2/?lang=en" },
    { text: "Sailing in Naxos", url: "https://www.naxossailing.com/" },
    { text: "Archeological Museum of Naxos", url: "http://odysseus.culture.gr/h/1/eh151.jsp?obj_id=3302&theme_id=21" },
    { text: "Naxos Surf Windsurf Club", url: "https://www.naxos-surf.com/" },
    { text: "Flisvos Windsurf-Kitesurf club", url: "https://www.flisvos-sportclub.com/" },
    { text: "Naxos Scuba Diving Centers", url: "https://www.bluefindivers.gr/" },
    { text: "Naxos Diving", url: "https://naxosdiving.com/" },
    { text: "Horseback riding centers", url: "https://naxoshorseriding.com/" },
  ];

  const rightLinks = [
    { text: "Naxos Weather", url: "https://www.meteo.gr/cf-en.cfm?city_id=17" },
    { text: "Naxos Live Webcamera", url: "https://www.skylinewebcams.com/en/webcam/ellada/naigaio/kyklades/naxos.html" },
    { text: "Ferry Routes", url: "http://www.openseas.gr/" },
    { text: "Ticket Reservation (Hellenic Seaways)", url: "https://www.hellenicseaways.gr/en-gb" },
    { text: "Ticket Reservation (Blue Star Ferries)", url: "https://www.bluestarferries.com/en-gb" },
    { text: "Flights to Naxos (OlympicAir)", url: "https://www.olympicair.com/" },
    { text: "Flights to Naxos (SkyExpress)", url: "https://www.skyexpress.gr/en" },
    { text: "General information on Naxos", url: "https://www.naxos.gr/?lang=en" },
  ];

  return (
    <>
      <Nav />
      <div className={styles.container}>
        {/* Left Links */}
        <div className={styles.leftLinks}>
          <ul>
            {leftLinks.map((link, i) => (
              <li key={`left-${i}`}>
                <a href={link.url} className={styles.link}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <img 
            src="../assets/infos/infos.jpg" 
            alt="Ocean" 
            className={styles.image}
          />
          <div className={styles.card}>
            <h1>Useful Links</h1>
            <p>
            Explore Naxos with ease! Here you will find essential links to local transport, attractions, activities and more. Whether you're looking for ferry schedules, museums, or water sports, these resources will help you make the most of your stay. Enjoy your time on our beautiful island!
            </p>          
          </div>
        </div>

        {/* Right Links */}
        <div className={styles.rightLinks}>
          <ul>
            {rightLinks.map((link, i) => (
              <li key={`right-${i}`}>
                <a href={link.url} className={styles.link}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Infos;


