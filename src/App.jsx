import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Detailspage from "./pages/Detailspage.jsx";
import Leavedetails from "./pages/Leavedetails.jsx";
import Exitpage from "./pages/Exitpage.jsx";
import Handlepopprops from "./pages/Handlepopprops.jsx";

import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Detailspage />} />
        <Route path="/leavedetails" element={<Leavedetails />} />
        <Route path="/devprops" element={<Handlepopprops />} />

        <Route path="*" element={<Exitpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
