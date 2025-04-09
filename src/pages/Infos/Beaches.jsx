import { useState, useEffect } from 'react';
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import HTMLFlipBook from 'react-pageflip';
import styles from "./Beaches.module.css";

function Beaches() {
  const [dimensions, setDimensions] = useState({
    width: 550,
    height: 733
  });

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 480) { // Mobile
        setDimensions({ width: 300, height: 400 });
      } else if (window.innerWidth <= 768) { // Tablet
        setDimensions({ width: 400, height: 533 });
      } else { // Desktop
        setDimensions({ width: 550, height: 733 });
      }
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const UsefulLinks = () => (
    <div className={styles.linksContainer}>
      <h2>Useful Links</h2>
      <ul>
        <li><a href="https://aquafun.gr/">Aqua Fun Park</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g805487-d1176100-Reviews-Agios_Prokopios_Beach-Agios_Prokopios_Naxos_Cyclades_South_Aegean.html">Agios Prokopios Beach</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g189431-d196218-Reviews-Plaka_Beach-Naxos_Cyclades_South_Aegean.html">Plaka Beach</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g1190444-d2290402-Reviews-Mikri_Vigla_Beach-Mikri_Vigla_Naxos_Cyclades_South_Aegean.html">Mikri Vigla Beach</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g189431-d649917-Reviews-Agia_Anna_Beach-Naxos_Cyclades_South_Aegean.html">Agia Anna Beach</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g189431-d8520521-Reviews-Paralia_Alyko-Naxos_Cyclades_South_Aegean.html">Alykó</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g580192-d12843695-Reviews-Hawaii_Beach-Naxos_Town_Naxos_Cyclades_South_Aegean.html">Hawaii Beach</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g3381383-d4893938-Reviews-Kastraki_Beach-Kastraki_Naxos_Cyclades_South_Aegean.html">Kastraki Beach</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g189431-d11613809-Reviews-Abram_Beach-Naxos_Cyclades_South_Aegean.html">Abram Beach</a></li>
        <li><a href="https://www.tripadvisor.com/Attraction_Review-g1925799-d4932329-Reviews-Apollonas_Beach-Apollon_Naxos_Cyclades_South_Aegean.html">Apollonas Beach</a></li>
      </ul>
    </div>
  );

  return (
    <>
      <Nav />
      
      <div className={styles.container}>
        <div className={styles.flipbookContainer}>
          <HTMLFlipBook 
            width={dimensions.width}
            height={dimensions.height}
            maxShadowOpacity={0.5}
            showCover={true}
            mobileScrollSupport={true}
            className={styles.flipbook}
          >
            {/* Cover Page */}
            <div className={styles.coverPage}>
              <h1>Naxos Beaches</h1>
              <p>A guide to help you explore the beautiful beaches of the island.</p>
              <img className={styles.coverPageImg} src="/assets/beaches/alyko-beach.jpg" alt="Alyko Beach" />
            </div>

            {/* Page 2 - Image */}
            <div className={styles.imagePage}>
              <img src="/assets/beaches/swimming.jpg" alt="Swimming" />
              <p className={styles.sectionText}>Summer means swimming and the guests of Aurora Villas have many exciting choices. The swimming pool with the comfortable loungers, the hydromassage, as well as the organized with umbrellas and sun beds on the beach of Agios Prokopios, just minutes away, provide a convenient and relaxing choice. Right next to Aurora Villas is Aqua Fun Park, which has waterslides, children’s pool and different other facilities.</p>
            </div>

            {/* Page 3 - Text */}
            <div className={styles.textPage}>
              <p className={styles.sectionText}>Naxos is certainly full of beaches of breathtaking beauty. The beach of Ag.Procopios, with crystal clear turquoise waters, is considered one of the best beaches in Greece. It is fully organised and has been awarded the blue flag. The beaches of Ag. Anna, Plaka, Orkos, Mikri Vigla, Aliko, Agiasos, Apollonas, Moutsouna and many others, will not let you get bored. Aurora Villas are located on the western side of the island, where the best beaches of Naxos are located.</p>
            </div>

            {/* Page 4 - Image */}
            <div className={styles.imagePage}>
              <img src="/assets/beaches/beach.jpg" alt="Beach" />
              <p className={styles.sectionText}>Naxos beaches are famous for their cleanliness, and natural beauty. Naxos has cedar tree forest beaches, beaches made of millions of pebbles, beaches coves, beaches caves, beaches with sand dunes. There are calm beaches were babies like to play,  secluded beaches, and also some of the mightiest waves the Cyclades see. When it comes to beaches, Naxos has it all!
              </p>
              <p className={styles.sectionText}>Aurora Villas’ great advantage is its central location, which offers you the opportunity to have every day a different Naxos beach experience!</p>
            </div>

            {/* Page 5 - Text */}
            <div className={styles.textPage}>
              <p className={styles.sectionText}>Many of the beaches, mainly closer to the town are well organised with umbrellas and sun beds and some have sea sports facilities. However there are wonderful beaches ideal for those who seek relaxation, nature or isolation.
              </p>
              <p className={styles.sectionText}>For sports lovers, Agios Georgios, Agios Prokopios, Plaka and Mikri Vigla are the ideal places to go. Visitors will also find some interesting cafes and bars by the sea.</p>
            </div>

            {/* Page 6 - Image */}
            <div className={styles.imagePage}>
            <img src="/assets/beaches/beach2.jpg" alt="Beach" />
              <p className={styles.sectionText}>For those who are looking for quite and less crowded beaches, keep goind south west, Kastraki, Glyfada, Alyko, Pyrgaki and Ayiassos. Abram and Lionas in the north are the places to go. In Naxos there are no beaches that are officially declared as beaches for nudists.</p>
              <p className={styles.sectionText}>However in Plaka, Orkos and the north end of Agios Prokopios nudists can enjoy their bathing. Kastraki and Alyko are ideal for families with little children because they have shallow waters. Beaches in Naxos are a unique experience and they will satisfy even the most demanding visitors.</p>
            </div>

            {/* Page 7 - Text with Links */}
            <div className={`${styles.textPage} ${styles.linksPage}`}>
              <UsefulLinks />
            </div>
          </HTMLFlipBook>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Beaches;