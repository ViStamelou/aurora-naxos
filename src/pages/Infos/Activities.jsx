import React, { useState } from "react";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./Activities.module.css";

// Import your images from the assets folder
import scubaDivingImg from "/assets/activities/diver.png";
import windsurfingImg from "/assets/activities/windsurfing.png";
import horsebackRidingImg from "/assets/activities/horse-carriage.png";
import alikoBeachImg from "/assets/activities/nature.png";
import kitesurfingImg from "/assets/activities/kitesurf.png";
import watersportsImg from "/assets/activities/jetski.png";
import hikingImg from "/assets/activities/hiking.png";
import kastroImg from "/assets/activities/castle-tower.png";

// Reusable ServiceCard component
function ServiceCard({ icon, altText, title, description }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.serviceCard}>
      <div className={styles.iconContainer}>
        <img src={icon} alt={altText} className={styles.serviceIcon} />
      </div>
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p
        className={`${styles.serviceDescription} ${
          !expanded ? styles.clampText : ""
        }`}
      >
        {description}
      </p>
      <button
        className={styles.serviceButton}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Less" : "More"}
      </button>
    </div>
  );
}

function Activities() {
  const cards = [
    {
      icon: scubaDivingImg,
      altText: "Scuba diving icon",
      title: "Scuba diving",
      description:
        "Explore the spectacular underwater world of Naxos Island. There are plenty of scuba diving and snorkelling centres, which will show you the amazing seabed of Naxos Island and ensure you have an unforgettable experience.",
    },
    {
      icon: windsurfingImg,
      altText: "Windsurfing icon",
      title: "Windsurfing",
      description:
        "The island of Naxos is a very popular Cycladic destination among water sports enthusiasts. Some beaches have become well known among watersports enthusiasts for the windsurfing opportunities they offer due to the strong summer winds and the facilities located there.",
    },
    {
      icon: horsebackRidingImg,
      altText: "Horseback Riding icon",
      title: "Horseback Riding",
      description:
        "With many beaches, traditional villages in the countryside, and marvelous landscapes, it is a fantastic experience to go horse riding in Naxos. The few Naxos horse riding centers offer courses for all ages as well as tours. Riding tours are addressed to both adults and children and include sunset riding tours, beach treks, or even therapeutic riding.",
    },
    {
      icon: alikoBeachImg,
      altText: "Aliko beach icon",
      title: "Aliko Beach(Hawaii & Kedros)",
      description:
        "Aliko is a wonderful peninsula with some very beautiful beaches, located on the south western side of Naxos, Cyclades. The most famous beach is called Hawaii and the nudism-friendly beach of Kedros. You can approach Kedros on foot from Hawaii since the beaches are adjoining. Above the beaches of Aliko, there is a unique cedar forest with marvellous sand dunes. This forest has been declared a protected natural area and creates an exotic landscape.",
    },
    {
      icon: kitesurfingImg,
      altText: "Kitesurfing icon",
      title: "Kitesurfing",
      description:
        "The island offers many opportunities for kitesurfing since there are several beaches where the conditions are ideal. You will find amazing places suitable for kitesurfing while at the same time, there are well-organized centers that arrange lessons for all levels and ages and provide the required equipment.",
    },
    {
      icon: watersportsImg,
      altText: "Watersports icon",
      title: "Watersports",
      description:
        "The majority of Naxos watersports lie on Plaka and Agios Georgios beaches, where you can find games for all ages and tastes, from waterskiing, kneeboard, jet skiing, bananas, canoe kayaking, SUP, and more. Enjoy a fun day at the beach with watersports in Naxos and make the best memories.",
    },
    {
      icon: hikingImg,
      altText: "Hiking icon",
      title: "HIKING",
      description:
        "Naxos’ mainland is full of picturesque, traditional villages; one of the island’s jewels is the imposing Mount Zas (1003 meters), the renowned home of the father of the Olympian gods, Zeus, after whom it was named. Famous for its cave with the dazzling stalagmites and stalactites, as well as the peak, which offers a breathtaking view of the endless blue of the Aegean Sea and the neighbouring islands.",
    },
    {
      icon: kastroImg,
      altText: "Kastro icon",
      title: "Kastro (Castle)",
      description:
        "Naxos Castle is the old Venetian Town of Naxos. The Castle consists of four levels and is the only castle in Naxos with a round shape. The fortress circuit towers, particularly the Glezos tower, are impeccably preserved, even to this day. In addition to fortification purposes, it played a huge role in local politics, education, and religion during the Venetian period, housing several buildings still open to the public, such as the Cathedral, the Archaeological Museum, and the Ursulines School. Moreover, many mansions still belong to renowned Venetian families, while others house shops and cafes.",
    },
  ];

  return (
    <>
      <Nav />

      {/* Activities Section */}
      <section className={styles.travelAgencyServices}>
        <h2 className={styles.title}>Activities to Enjoy in Naxos</h2>
        <div className={styles.cardWrapper}>
          {cards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Activities;



