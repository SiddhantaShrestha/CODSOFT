import React from "react";

import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import HeroImage2 from "../Components/HeroImage2.js";
import PricingCard from "../Components/PricingCard.js";
import Work from "../Components/Work.js";

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImage2
        heading="PROJECTS."
        text="Some of my recent works"
      ></HeroImage2>
      <Work></Work>
      {/* <PricingCard></PricingCard> */}
      <Footer></Footer>
    </div>
  );
};

export default Project;
