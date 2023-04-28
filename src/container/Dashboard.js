import React, { useState } from "react";
import FeatureSection from "../components/FeatureSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PropertyContainer from "./PropertyContainer";
import SearchProperty from "../components/viewer/SearchProperty";

export default function Dashboard() {
  return (
    <React.Fragment>
      <div>
        <Header />
      </div>
      <div>
        <SearchProperty />
      </div>
      <div>
        <PropertyContainer />
      </div>
      <div>
        <FeatureSection />
      </div>
    </React.Fragment>
  );
}
