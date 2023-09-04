import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import WOW from 'wowjs'

export default function AboutUs() {
    const location = useLocation()
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
    <div class="container-fluid pt-2 py-lg-5 wow fadeInUp animate__animated animate__fadeInUp" data-wow-delay="0.1s">
       <div class="container py-5">
         <div class="row g-5">
           <div class="col-lg-7">
             <div class="section-title position-relative pb-3 mb-4">
               <h5 class=" fw-bold text-primary text-uppercase pb-3" style={{fontSize:'25px'}} >About Us</h5>
               <h1 class="mb-0">
               Delivering Excellence in IT Solutions: Your Partner for Exceptional Expertise
               </h1>
             </div>
             <p class="mb-4">
               <h5>
               Aadvi Tech. Solutions, A Leading Provider of technology solutions for business of all sizes. Our team
of experts has a proven track record of delivering innovative, cost-effective and efficient
solutions for all the business.
</h5>
             </p>


             {/* <div class=" row g-5 mt-2 aboutUs-container-card">
               
                <div class="aboutUs-box  wow animate__animated animate__zoomIn service-item rounded d-flex justify-content-center align-items-center" data-wow-delay="0.3s">
                  
                  <p>
                  Integrated Solutions
                  </p>
                 
                </div>
                </div> */}


             <div class="row g-0 ">
               <div class="col-sm-6 wow zoomIn animate__animated animate__zoomIn" data-wow-delay="0.2s">
                 <div className="aboutUs-box mx-lg-1">
                 <h5 >
                   {/* <i class="fa fa-check text-primary me-3"></i> */}
                   Integrated Solutions 
                 </h5>
                 </div>
                 <div className="aboutUs-box mx-lg-1">
                 <h5 >
                   {/* <i class="fa fa-check text-primary me-3"></i> */}
                   Reliability
                 </h5>
                 </div>
               </div>
               <div class="col-sm-6 wow zoomIn animate__animated animate__zoomIn " data-wow-delay="0.4s">
               <div className="aboutUs-box ">
                 <h5 >
                   {/* <i class="fa fa-check text-primary me-3"></i> */}
                   Responsiveness
                 </h5>
                 </div>
                 <div className="aboutUs-box ">
                 <h5 >
                   {/* <i class="fa fa-check text-primary me-3 "></i> */}
                   Cost-effectiveness
                 </h5>
                 </div>
               </div>
             </div>


             <div
               class="d-flex align-items-center mb-4 wow fadeIn animate__animated animate__fadeIn"
               data-wow-delay="0.6s"
             >
               {/* <div
                 class="bg-primary d-flex align-items-center justify-content-center rounded"
                 style={{width: "60px", height: "60px"}}
               > 
                 <i class="fa fa-phone-alt text-white"></i>
               </div>
               <div class="ps-4">
                 <h5 class="mb-2">Call us to ask any question</h5>
                 <h4 class="text-primary mb-0"> 8121913759</h4>
               </div> */}
             </div>
           </div>
           <div class="col-lg-5" style={{minHeight: "500px"}}>
             <div class="position-relative h-100">
               <img
                 class="position-absolute w-100 h-100 wow  animate__animated animate__zoomIn"
                 data-wow-delay="0.9s"
                 src={require('../../Assets/image/about.jpg')}
                 alt="About"
                 style={{objectFit: "cover",borderRadius:'50px 20px',boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",borderRadius: '20px'}}
               />
             </div>
           </div>
         </div>
       </div>
       </div>
       </div>

  )
}
