import React from 'react'
import { useEffect, useState } from 'react';

import $ from 'jquery'
import WOW from 'wowjs'
import AboutUs from '../SubComponents/AboutComponents/AboutUs';
import WhoAreWe from '../SubComponents/AboutComponents/WhoAreWe';
import OurMissionOurVision from '../SubComponents/AboutComponents/OurMissionOurVision';
import CultureAndDiversity from '../SubComponents/AboutComponents/CultureAndDiversity';
import CompaniesCarousel from '../SubComponents/AboutComponents/CompaniesCarousel';
import { useLocation } from 'react-router-dom';
import CoreValues from '../SubComponents/AboutComponents/CoreValues';

function About() {
  const location= useLocation();
  const [wowInitialized, setWowInitialized] = useState(false);

  useEffect(() => {
    if (!wowInitialized) {
      const wow = new WOW.WOW();
      wow.init();
      setWowInitialized(!wowInitialized);
    }
  }, [location, wowInitialized]);
  return (
    <div>
    <AboutUs/>
    {/* <CultureAndDiversity/> */}
    <OurMissionOurVision/>
    <WhoAreWe/>
    <CoreValues/>
    {location.pathname==='/about'?<CompaniesCarousel/> : ""}
    </div>
  )
}

export default About