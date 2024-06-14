import VGJ1 from "./images/VGJ1.jpeg";
import VGJ2 from "./images/VGJ2.jpeg";
import VGJ3 from "./images/VGJ3.jpeg";
import VGJ4 from "./images/VGJ4.jpeg";
import arihant1 from "./images/arihant1.jpeg";
import arihant2 from "./images/arihant2.jpeg";
import arihant3 from "./images/arihant3.jpeg";
import arihant4 from "./images/arihant4.jpeg";

export const data = [
  {
    id: 1,
    images: [VGJ2, VGJ1, VGJ3, VGJ4],
    name: "VGJ- Tribhuvan", // Array of image URLs
    rent: [
      { occupancy: "Single Occupancy", price: "₹55,000/mo*" },
      { occupancy: "Double Occupancy", price: "₹45,000/mo*" },
      { occupancy: "Triple Occupancy", price: "₹35,000/mo*" },
    ],
    houseType: "Hostel", // Example house type
    price: 35000, // Example price
    location: "Vile Parle", // Example location
    gender: "Female", // Example gender
    messAvailable: "Yes", // Example mess availability
    furnished: "Fully-furnished",
    Meals: "3 times",
    About:
      " This flat is located in a very convenient location, 600m from Vile Parle train station, 1km from NMIMS College, Mumbai. This flat in Mumbai is also fully furnished",
    amen: [
      "A/C",
      "Electricity included",
      "Housekeeping included",
      "Laundry",
      "Elevator",
      "CCTV",
    ],
  },
  {
    id: 2,
    images: [arihant3, arihant1, arihant2, arihant4],
    name: "VGJ- Arihant", // Array of image URLs
    rent: [
      { occupancy: "Double Occupancy", price: "₹27,000/mo*" },
      { occupancy: "Quad Occupancy", price: "₹22,000/mo*" },
    ],
    houseType: "Hostel", // Example house type
    price: 22000, // Example price
    location: "Andheri West", // Example location
    gender: "Female", // Example gender
    messAvailable: "Yes", // Example mess availability
    furnished: "Fully-furnished",
    Meals: "2 times",
    About:
      "This flat is located in a very convenient location, 300m from Andheri train station, 2km from NMIMS College, Mumbai. This flat in Mumbai is also fully furnished",
    amen: [
      "A/C",
      "Electricity included",
      "Housekeeping included",
      "Laundry",
      "Elevator",
      "CCTV",
    ],
  },
];
