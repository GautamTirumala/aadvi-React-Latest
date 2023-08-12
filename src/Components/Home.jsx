import React from 'react'
import About from '../Components/About'
import Contacts from '../Components/Contacts'
import Services from '../Components/Services'
import CareersInHome from '../SubComponents/CareersInHome'



function Home() {
  return (
    <div>
    <About/>
    <Services/>
    <CareersInHome/>
    <Contacts/>
    </div>
    
  )
}

export default Home