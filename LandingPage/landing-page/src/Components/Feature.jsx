import React from "react";
import FeatureBox from "./FeatureBox";
import featureImage from "../images/feature_1.png";
import featureImage1 from "../images/feature_2.png";
import featureImage2 from "../images/feature_3.png";

function Feature() {
  return (
    <div id="features">
      <h1>Features</h1>
      <div className="feature-container">
        <FeatureBox image={featureImage} title="Special Course"></FeatureBox>
        <FeatureBox image={featureImage1} title="Various Services"></FeatureBox>
        <FeatureBox image={featureImage2} title="User Friendly"></FeatureBox>
      </div>
    </div>
  );
}

export default Feature;
