import VGJ1 from "./images/VGJ1.jpeg";
import VGJ2 from "./images/VGJ2.jpeg";
import VGJ3 from "./images/VGJ3.jpeg";
import VGJ4 from "./images/VGJ4.jpeg";
import arihant1 from "./images/arihant11.jpeg";
import arihant2 from "./images/arihant12.jpeg";
import arihant3 from "./images/arihant13.jpeg";
import arihant4 from "./images/arihant14.jpeg";
import arihant5 from "./images/arihant15.jpeg";
import mahel1 from "./images/mahel1.jpg";
import mahel2 from "./images/mahel2.jpg";
import mahel3 from "./images/mahel3.jpg";
import mahel4 from "./images/mahel4.jpg";
import mahel5 from "./images/mahel5.jpg";
import mahel6 from "./images/mahel6.jpg";
import mahel7 from "./images/mahel7.jpg";

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
    subloc: "1km from NMIMS",
    gender: "Girls", // Example gender
    messAvailable: "Yes", // Example mess availability
    furnished: "Fully-furnished",
    Meals: "3 times",
    About:
      " This flat is located in a very convenient location, 600m from Vile Parle train station, 1km from NMIMS College, Mumbai. This flat in Mumbai is also fully furnished",
    amen: ["A/C", "Electricity", "Housekeeping", "Laundry", "Elevator", "CCTV"],
  },
  {
    id: 2,
    images: [arihant2, arihant3, arihant1, arihant4, arihant5],
    name: "VGJ- Arihant", // Array of image URLs
    rent: [
      { occupancy: "Double Occupancy", price: "₹27,000/mo*" },
      { occupancy: "Quad Occupancy", price: "₹22,000/mo*" },
    ],
    houseType: "Hostel", // Example house type
    price: 22000, // Example price
    location: "Andheri West", // Example location
    subloc: "2km from NMIMS",
    gender: "Girls", // Example gender
    messAvailable: "Yes", // Example mess availability
    furnished: "Fully-furnished",
    Meals: "2 times",
    About:
      "This flat is located in a very convenient location, 300m from Andheri train station, 2km from NMIMS College, Mumbai. This flat in Mumbai is also fully furnished",
    amen: ["A/C", "Electricity", "Housekeeping", "Laundry", "Elevator", "CCTV"],
  },
  {
    id: 3,
    images: [mahel2, mahel1, mahel3, mahel4, mahel5, mahel6, mahel7],
    name: "Venus Apartment", // Array of image URLs
    rent: [
      { occupancy: "Double Attach", price: "₹45,000/mo*" },
      { occupancy: "Double Non Attach", price: "₹40,000/mo*" },
      { occupancy: "Triple Occupancy", price: "₹37,000/mo*" },
    ],
    houseType: "Hostel", // Example house type
    price: 37000, // Example price
    location: "Vile Parle", // Example location
    subloc: "1.5km from NMIMS",
    gender: "Boys", // Example gender
    messAvailable: "No", // Example mess availability
    furnished: "Fully-furnished",
    Meals: "3 times",
    About:
      "This flat is located in a very convenient location, 1km from Andheri train station, 1.5km from NMIMS College, Mumbai. This flat in Mumbai is also fully furnished",
    amen: [
      "A/C",
      "Electricity",
      "Housekeeping",
      "Laundry",
      "Elevator",
      "Wifi",
      "Coffee",
    ],
  },
];
