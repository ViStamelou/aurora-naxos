import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; 
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./Home.module.css"; 

const images = [
  "/assets/carousel/slide1.jpg",
  "/assets/carousel/slide2.jpg",
  "/assets/carousel/slide3.jpg",
  "/assets/carousel/slide4.jpg",
  "/assets/carousel/slide5.jpg"
];

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      
      <Nav />

      {/* Carousel Section */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        effect="fade" // Apply fade effect for smooth transitions
        speed={1000} // Increase transition speed (default is 300ms)
        fadeEffect={{ crossFade: true }} // Smooth fade transition
        className={styles.carousel}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className={styles.carouselImageContainer}>
              <img src={src} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
              <div className={styles.carouselOverlay}></div>
              <div className={styles.carouselText}>
                <h2>Aurora Villas Naxos</h2>
                <p>Experience luxury and comfort</p>
                <a href="https://auroravillas.reserve-online.net/ ">
                  <button className={styles.carouselButton}>Book Now</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

            {/* Section Below Carousel */}
        <section className={styles.infoSection}>
        {/* Text Area */}
        <div className={styles.textContent}>
          <h2>Welcome!</h2>
          
          <p>
          Discover Aurora Villas, nestled in the tranquil haven of Stelida, Naxos. These two exquisite villas sprawl across a lush garden spanning 2000 square meters, 
          offering a sanctuary of peace and privacy.</p>
          <p>Each villa boasts 4 thoughtfully designed bedrooms, accommodating up to 8 guests. For those seeking a grander experience, 
          the option to reserve both villas together unveils a lavish retreat with a total of 8 bedrooms, accommodating up to 16 guests. </p>
          <p>Aurora Naxos stands as one of the 
          largest and most opulent villas on the island.These enchanting villas exude the authentic charm of Cycladic architecture, creating an idyllic escape for families 
          and friends eager to explore the captivating beauty of Naxos island.
          </p>
          <p>
          There are two villas, which both have private parking, fully equipped kitchen, A/C in every bedroom, safe, dishwasher, microwave, Nespresso and coffee making facilities.
          The Villas share one building, but can also be rented as a whole.
          Aurora Villas make the perfect environment for a family or friends vacation in Naxos, which is filled with authentic Cycladic character and raw purity of its nature.
          </p>
          <h3>Book your unforgettable retreat at Aurora Naxos Villas now and experience the epitome of island luxury.</h3>
        </div>

        {/* Image Grid */}
        <div className={styles.imageGrid}>
          <img src="/assets/home/image1.jpg" alt="Decorative 1" className={styles.gridImage} />
          <img src="/assets/home/image2.jpg" alt="Decorative 2" className={styles.gridImage} />
          <img src="/assets/home/image3.jpg" alt="Decorative 3" className={styles.gridImage} />
        </div>
      </section>


        <Footer />

    </div>
  );
};

export default Home;

