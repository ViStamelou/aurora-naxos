import { useState } from "react";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./Villas.module.css";

const villaData = {
  wholeVilla: {
    name: "The Entire Villa",
    description: "The Entire Villa",
    images: [
      ...Array.from({ length: 10 }, (_, i) => `/assets/Villa_I/image${i + 1}.jpg`),
      ...Array.from({ length: 8 }, (_, i) => `/assets/Villa_II/images${i + 1}.jpg`),
      ...Array.from({ length: 26 }, (_, i) => `/assets/Villa_I/image${i + 11}.jpg`),
      ...Array.from({ length: 20 }, (_, i) => `/assets/Villa_II/images${i + 9}.jpg`),
    ],   
    amenities: ["Private Pool", "Beach Access", "Free WiFi", "24/7 Security"],
  },
  villa1: {
    name: "Villa I",
    description: "Villa I",
    images: Array.from({ length: 36 }, (_, i) => `/assets/Villa_I/image${i + 1}.jpg`),
    amenities: ["Infinity Pool", "King-sized Bed", "Outdoor Lounge"],
  },
  villa2: {
    name: "Villa II",
    description: "Villa II",
    images: Array.from({ length: 28 }, (_, i) => `/assets/Villa_II/images${i + 1}.jpg`),
    amenities: ["Garden View", "Hot Tub", "Smart TV"],
  },
};

function Villas() {
  const [selectedVilla, setSelectedVilla] = useState("wholeVilla");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const { description, images, amenities } = villaData[selectedVilla];

  const openImageModal = (index) => setSelectedImageIndex(index);
  const closeModal = () => setSelectedImageIndex(null);
  const closeModalOnBackdropClick = (e) => {
    if (e.target.classList.contains(styles.modal)) closeModal();
  };
  const nextImage = () => setSelectedImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setSelectedImageIndex((prev) => (prev - 1 + images.length) % images.length);

  const villaSelectionText = {
    wholeVilla: [
      "The Villas can be rented as a whole. Please, contact us if you would like more information.",
      "A cost-effective holiday option for families with children, groups of friends, or a romantic sanctuary for couples and honeymooners.",
    ],
    villa1: [
      "The Villa has two levels, a swimming pool, and offers a marvelous view of the sea and of Naxos town.",
      "Villa I has a private entrance, basketball court, and free parking onsite, as well as outdoor showers by the pool. It also has an outdoor barbecue area with a dining table set, where you can enjoy and relax with your friends and family.",
      "Villa I is ideal for those who seek a quiet place with privacy. From the fully equipped and functional kitchen to the cozy living area and the large swimming pool, you will definitely want to spend as much in-house time as possible with many plants, herbs, and trees that will make your stay a pleasure.",
    ],
    villa2: [
      "Villa II is set on the ground floor, has a jacuzzi, and offers a marvellous view of the garden.",
      "It has a private entrance, barbecue area with dining table set, foosball table, football area, and free parking area. It is ideal for those who seek a quiet place with privacy.",
      "From the fully equipped and functional kitchen to the cozy living area and sun loungers by the jacuzzi, you will definitely want to spend as much in-house time as possible with many plants, herbs, and trees that will make your stay a pleasure.",
    ],
  };

  return (
    <div className={styles.container}>
      <Nav />
      <div className={styles.svgContainer}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#90b6d1"
            fillOpacity="0.5"
            transform="translate(1440, 0) scale(-1, 1)"
            d="M0,32L80,53.3C160,75,320,117,480,122.7C640,128,800,96,960,101.3C1120,107,1280,149,1360,170.7L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          ></path>
        </svg>
        <h1 className={styles.svgTitle}>Villa Gallery</h1>
      </div>

      <div style={{ marginTop: "-180px" }} className={styles.flexContainer}>
        <aside className={styles.sidebar}>
          <div className={`${styles.selectionText} ${styles.villaText}`}>
            {villaSelectionText[selectedVilla].map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className={styles.infoBox}>
            <h3>Important Information</h3>
            <div className={styles.policy}>
              <h4>Maximum Villa Capacity</h4>
              <p>
                {selectedVilla === "wholeVilla"
                  ? "Up to 16 guests are allowed."
                  : "Up to 8 guests are allowed."}
              </p>
            </div>
            <div className={styles.policy}>
              <h4>Children Policy</h4>
              <p>
                Children are welcome.
                <br />
                Baby cot is provided upon request and is free of charge.
              </p>
            </div>
            <div className={styles.policy}>
              <h4>Check-in Policy</h4>
              <p>
                Check-in time: 15:00
                <br />
                Check-out time: 11:00
              </p>
            </div>
            <div className={styles.policy}>
              <h4>Payment Policy</h4>
              <p>The total price of the reservation is charged at the time of booking.</p>
            </div>
            <div className={styles.policy}>
              <h4>Cancellation Policy</h4>
              <p>
                No free cancellation is allowed for this rate, special conditions apply.
                <br />
                If you cancel, modify the booking, or don’t show up, the fee will be the
                total price of the reservation.
                <br />
                However, you can reschedule your stay one time until the arrival date for
                the same or a higher price. You’ll only be charged if there’s a price
                difference between your new and old dates.
              </p>
            </div>
          </div>
        </aside>

        <main className={styles.mainContent}>
          <div className={styles.radioSection}>
            <h2 className={styles.radioTitle}>Choose Your Villa</h2>
            <div className={styles.radioGroup}>
              {Object.keys(villaData).map((key) => (
                <label key={key} className={styles.radioLabel}>
                  <input
                    type="radio"
                    name="villa"
                    value={key}
                    checked={selectedVilla === key}
                    onChange={() => setSelectedVilla(key)}
                  />
                  <span>{villaData[key].name}</span>
                </label>
              ))}
            </div>
          </div>

          <p className={styles.description}>{description}</p>
          
          <div className={styles.gallery}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`Villa Image ${index + 1}`}
                onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")}
                onClick={() => openImageModal(index)}
                loading="lazy"
              />
            ))}
          </div>

          <div className={styles.amenities}>
            <h2>Amenities</h2>
            <ul>
              {amenities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>

      {selectedImageIndex !== null && (
        <div className={styles.modal} onClick={closeModalOnBackdropClick}>
          <span className={styles.close} onClick={closeModal} aria-label="Close modal">
            &times;
          </span>
          <span className={styles.prev} onClick={prevImage} aria-label="Previous image">
            &#10094;
          </span>
          <img
            src={images[selectedImageIndex]}
            alt="Enlarged View"
            className={styles.modalContent}
          />
          <span className={styles.next} onClick={nextImage} aria-label="Next image">
            &#10095;
          </span>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Villas;






