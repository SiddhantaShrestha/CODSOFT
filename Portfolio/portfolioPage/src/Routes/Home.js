import React from "react";
import Navbar from "../Components/Navbar";
import HeroImage from "../Components/HeroImage";
import Footer from "../Components/Footer";
import Work from "../Components/Work.js";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage></HeroImage>
      <Work></Work>
      <Footer></Footer>
    </div>
  );
};

export default Home;
