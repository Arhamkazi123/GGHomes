import arihant1 from "./images/arihant1.jpeg";
import arihant2 from "./images/arihant2.jpeg";
import arihant3 from "./images/arihant3.jpeg";
import arihant4 from "./images/arihant4.jpeg";

export const devdata = [
  {
    id: 2,
    images: [arihant2, arihant3, arihant1, arihant4],
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
  // {
  //   id: 2,
  //   images: [Devprop3, Devprop4],
  //   name: "Arhamproperty 2", // Array of image URLs
  //   houseType: "PG", // Example house type
  //   price: 1500, // Example price
  //   location: "Rajasthan", // Example location
  //   gender: "Female", // Example gender
  //   messAvailable: "Yes", // Example mess availability
  //   furnished: "Fully-Furnished",
  // },
];
