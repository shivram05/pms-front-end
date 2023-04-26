import React from "react";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertyContainer from "./PropertyContainer";

export default function Dashboard() {
  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <div>
        <PropertyContainer />
      </div>
      <div>
      
        <FeatureSection />
      </div>
      <div>
        <Footer />
      </div>
    </React.Fragment>
  );
}
