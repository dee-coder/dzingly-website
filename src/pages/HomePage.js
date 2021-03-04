import React, { BrowserRouter } from "react";
import HomeBanner from "../components/HomeBanner";
import HowItWorks from "../components/HowItWorks";
import ToggelSection from "../components/ToggelSection";
import Pricing from "../components/Pricing";
import DesignOption from "../components/DesignOption";
import Benifits from "../components/Benifits";
import AboutWe from "../components/AboutWe";
import CustomerSections from "../components/CustomerSections";

const HomePage = () => {
  return (
    <>
      
      <HomeBanner />
      <HowItWorks />
      {/* <ToggelSection/> */}
      <Pricing />
      <DesignOption />
      <Benifits />
      <AboutWe />
      <CustomerSections />
      
    </>
  );
};

export default HomePage;
