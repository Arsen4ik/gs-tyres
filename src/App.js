import { gsap } from "gsap";
import { useRef, useEffect } from "react";

import NavBar from "./components/NavBar";

import "./App.css";

import { Routes, Route } from "react-router-dom";

import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import CarSuvVans from './components/CarSuvVans/CarSuvVans'
import TyreDetails from "./components/TyreDetails/TyreDetails";
import Agriculture from "./components/Agriculture/Agriculture";
import Trucks from "./components/Trucks/Trucks";

function App() {
  // store a reference to the box div
  const boxRef = useRef();
  useEffect(() => {
    gsap.to(boxRef.current, {
      rotation: "360",
      repeat: -1,
      ease: "none",
      duration: 4,
    });
  });

  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path='/car-suv-vans' element={<CarSuvVans/>} />
        {/* <Route path='/tyre-details/:id' element={<TyreDetails/>} /> */}
        <Route path='/agriculture' element={<Agriculture />} />
        <Route path='/trucks' element={<Trucks />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
  
      <Footer />
    </div>
  );
}

export default App;
