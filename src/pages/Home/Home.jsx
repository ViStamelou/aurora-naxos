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
          <h2>Escape to Aurora Villas, Naxos!</h2>
          
          <p>
          Tucked in the serene Stelida, Naxos, Aurora Villas offer the perfect blend of luxury and privacy. Set in a lush 2000 sqm garden, these two stunning villas embody authentic Cycladic charm, ideal for families and friends seeking a peaceful getaway.</p>
          <p>Each villa features 4 stylish bedrooms, a fully equipped kitchen, A/C in every room, and more, comfortably hosting up to 8 guests. For larger groups, rent both villas to accommodate up to 16.</p>
          <p>Just 4km from Naxos Port and 2km from the airport, you’re only a 10-minute walk to the award-winning Agios Prokopis Beach. Whether you’re here to relax or explore, Aurora Villas offer a tranquil retreat close to everything Naxos has to offer.
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

