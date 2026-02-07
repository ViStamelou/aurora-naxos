import { useState } from "react";
import Nav from "../../components/Navbar/Nav";
import Footer from "../../components/Footer/Footer";
import styles from "./Restaurants.module.css";

// Import all local images from assets
import restaurant1 from "/assets/restaurants/restaurant1.jpg";
import restaurant2 from "/assets/restaurants/restaurant2.jpg";
import restaurant3 from "/assets/restaurants/restaurant3.jpg";
import restaurant4 from "/assets/restaurants/restaurant4.jpg";
import restaurant5 from "/assets/restaurants/restaurant5.jpg";
import restaurant6 from "/assets/restaurants/restaurant6.jpg";
import restaurant7 from "/assets/restaurants/restaurant7.jpg";
import restaurant8 from "/assets/restaurants/restaurant8.jpg";
import restaurant9 from "/assets/restaurants/restaurant9.jpg";
import restaurant10 from "/assets/restaurants/restaurant10.jpg";
import restaurant11 from "/assets/restaurants/restaurant11.jpg";
import restaurant12 from "/assets/restaurants/restaurant12.jpg";

// Restaurant data array
const restaurantData = [
  {
    id: 1,
    name: "Meze Meze",
    description: "A popular seaside restaurant, offering a delightful selection of traditional Greek meze dishes.",
    location: "Paralia Chora"
  },
  {
    id: 2,
    name: "Irini's Tavern",
    description: "A family-run establishment located along the waterfront of Naxos Town, Irini's offers traditional Greek cuisine in a cozy setting. Guests can enjoy dishes like slow-baked lamb and fresh seafood while taking in views of the harbor. The restaurant is praised for its authentic flavors and warm hospitality.",
    location: "Naxos Town"
  },
  {
    id: 3,
    name: "Axiotissa",
    description: "Axiotissa is one of the most renowned taverns on Naxos, located near the beautiful beach of Kastraki. It’s celebrated for its creative take on traditional Greek cuisine and its emphasis on organic and local produce.",
    location: "Kastraki"
  },
  {
    id: 4,
    name: "Pizzadelia",
    description: "Known for its delicious pizzas made with local cheeses and produce. ",
    location: "Naxos"
  },
  {
    id: 5,
    name: "La Paloma",
    description: "La Paloma offers a unique dining experience with its fusion of Mediterranean and Tex-Mex cuisines.",
    location: "Ariadnis, Naxos Town"
  },
  {
    id: 6,
    name: "Milkato Gelateria",
    description: "Milkato is a delightful gelateria in Naxos Town, offering a variety of artisanal ice creams and waffles made from fresh, local milk. Established in 2008, it has become a favorite spot for both locals and tourists seeking a sweet treat.",
    location: "Chora, Naxos Town"
  },
  {
    id: 7,
    name: "'I Pigi' Tavern",
    description: "Nestled in the village of Ano Potamia, I Pigi Tavern is renowned for its traditional Naxian cuisine. Located beside a historic water spring, the tavern offers a serene setting amidst lush greenery.",
    location: "Ano Potamia"
  },
  {
    id: 8,
    name: "Rotonda",
    description: "Perched on the road between Filoti and Apeiranthos, Rotonda Restaurant boasts panoramic views of the Aegean Sea and Naxos' mountainous landscape. It's an ideal spot to witness breathtaking sunsets while savoring dishes made from locally sourced ingredients. ",
    location: "Agios Ioannis, Apeiranthos"
  },
  {
    id: 9,
    name: "O Charis",
    description: "Located in the village of Eggares, O Charis is a traditional tavern celebrated for its hearty Naxian dishes. A standout offering is their signature omelette, crafted with local eggs, potatoes, and Naxos gruyere cheese.",
    location: "Eggares"
  },
  {
    id: 10,
    name: "Vlahos Tavern",
    description: "Situated in the hillside village of Glinado, Vlahos Tavern offers diners stunning views of the island, especially during sunset. This family-run establishment is known for its traditional Greek dishes, including moussaka, grilled meats, and fresh salads.",
    location: "Glinado, Naxos"
  },
  {
    id: 11,
    name: "Amorginos",
    description: "Amorginos is a beloved traditional tavern located in the mountain village of Apeiranthos, renowned for its meat dishes.",
    location: "Apeiranthos"
  },
  {
    id: 12,
    name: "Platia Tavern",
    description: "In the tranquil village of Galini, Platia Tavern invites guests to indulge in authentic Naxian flavors. Emphasizing farm-to-table practices, the tavern uses fresh, local ingredients, some sourced directly from their own farm. ",
    location: "Galini"
  },

];

const imageMap = {
  1: restaurant1,
  2: restaurant2,
  3: restaurant3,
  4: restaurant4,
  5: restaurant5,
  6: restaurant6,
  7: restaurant7,
  8: restaurant8,
  9: restaurant9,
  10: restaurant10,
  11: restaurant11,
  12: restaurant12,
};

function Restaurants() {
  // Track expanded state for each restaurant
  const [expanded, setExpanded] = useState({});

  // Toggle expanded state for a specific restaurant
  const toggleExpand = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Truncate text to 6 words
  const truncateText = (text) => {
    const words = text.split(' ');
    if (words.length <= 6) return text;
    return words.slice(0, 6).join(' ') + '...';
  };

  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>
        <h1 className={styles.title}>🍽️Restaurants & Taverns</h1>
        <p className={styles.subtitle}>Savor the best: our exclusive guide to unforgettable restaurants</p>
        
        <div className={styles.restaurantsGrid}>
          {restaurantData.map((restaurant) => {
            const isExpanded = expanded[restaurant.id];
            const descriptionWords = restaurant.description.split(' ');
            const showButton = descriptionWords.length > 6;
            
            return (
              <div key={restaurant.id} className={styles.restaurantCard}>
                <div className={styles.imageContainer}>
                  <img 
                    src={imageMap[restaurant.id]} 
                    alt={restaurant.name} 
                    className={styles.restaurantImage}
                  />
                </div>
                <div className={styles.cardContent}>
                  <h2 className={styles.restaurantName}>{restaurant.name}</h2>
                  <p className={styles.location}>
                    <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={styles.locationIcon}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                    {restaurant.location}</p>
                  <p className={styles.description}>
                    {isExpanded ? restaurant.description : truncateText(restaurant.description)}
                  </p>
                  {showButton && (
                    <button 
                      onClick={() => toggleExpand(restaurant.id)}
                      className={styles.moreButton}
                    >
                      {isExpanded ? 'Less' : 'More'}
                    </button>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Restaurants;
