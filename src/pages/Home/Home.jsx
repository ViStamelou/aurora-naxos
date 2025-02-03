import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect
import Nav from "../../components/Navbar/Nav";
import styles from "./Home.module.css"; // Import CSS module

const images = [
  "/assets/carousel/slide1.jpg",
  "/assets/carousel/slide2.jpg"
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
        className={styles.carousel}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className={styles.carouselImageContainer}>
              <img src={src} alt={`Slide ${index + 1}`} className={styles.carouselImage} />
              <div className={styles.carouselOverlay}></div>
              <div className={styles.carouselText}>
                <h2>Welcome to Our Home</h2>
                <p>Experience luxury and comfort</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default Home;

