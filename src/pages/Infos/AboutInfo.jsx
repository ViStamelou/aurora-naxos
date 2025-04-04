import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./AboutInfo.module.css";

function Beaches() {
  return (
    <>
      <Nav />

      {/* Hero Section */}
      <div className={styles.heroSection} style={{ backgroundImage: "url('/assets/explore/portara.jpg')" }}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Explore Naxos</h1>
          <p className={styles.heroSubtitle}>Discover the hidden gems of the island</p>
        </div>
      </div>

      {/* Description Section */}
      <section className={styles.descriptionSection}>
        <div className={styles.container}>
          <p className={styles.leadText}>
          Naxos combines the architecture and morphology of the Cyclades with those of Mainland Greece and the Ionian. Venetian castles, medieval walls, stone built churches and monasteries, lush mountains, sandy beaches, picturesque villages, museums, archaeological sites, stunning cuisine, cozy bars and cafés make Naxos an unbeatable destination.
          </p>
          <p className={styles.leadText}>
          Being centrally located at the heart of Greece, in the center of Aegean archipelago and Cyclades, Naxos provides an easy access to most other Cycladic islands. It’s located very close to the islands of Paros, Ios, Santorini, Mykonos, Delos and Syros. Naxos’ location makes the island a great destination on its own and a perfect stop for those interested in exploring a few Greek islands.
          </p>
          <p className={styles.leadText}>
          Here you enjoy amazing food gastronomy with the best cheese, potatoes and meat of Greece, you discover many beautiful hiking paths, many archaelogical sites, Byzantine churches, and you come in contact with the raw way of living. Here you vacate yourself from the everyday life, you relax and enjoy the simplicity of life in a lower pace. These are just a few of the many amazing things Naxos has to offer, and many more waiting for you to be explored.
          </p>
        </div>
      </section>

      {/* Blue Caves Section */}
      <section className={styles.mountainsSection}>
        <div className={styles.container}>
          <div className={styles.contentWrapper}>
            <div className={styles.textContent}>
              <h2 className={styles.sectionTitle}>Naxos Mountains</h2>
              <p className={styles.sectionText}>
              To uncover Naxos’ past, wealth, power, and raw way of living, head to its countless mountain villages, each one unique, with its own cultural element, worth discovering one by one with a ton of things to see and do.
              </p>
              <p className={styles.sectionText}>
              Most of the villages in Naxos Island are in the middle and the north of the island. There are many routes to choose from, and for the adventure lovers there are more than 20 walking tours to discover olive groves, forests, caves, ravines.
              </p>
              <p className={styles.sectionText}>
              During the summer months, the coast line by the town and its surrounding area steal the show, but most visitors love the island for its mountainous region, its picturesque villages, its diverse culture, its delicious mountainous local food and its authenticity.
              </p>
              <p className={styles.sectionText}>
              The island is quite big and the best idea is to rent a car when visiting Naxos.  If you want to explore the island, drive around, head to the mainland and the highlands, discover off the beaten path places and isolated beaches, enjoy farm to fork cuisine, discover hiking and stunning spots overlooking the island and adjacent Cycladic islands, then you must rent a car. 
              </p>
            </div>
            <div className={styles.imageContainer}>
                <img 
                    src="/assets/explore/mountain.jpg" 
                    alt="Naxos Mountains" 
                    className={styles.featuredImage}
                />
                <img 
                    src="/assets/explore/lamb-chop.jpg"
                    alt="More Naxos" 
                    className={styles.overlayImage}
                />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Beaches;