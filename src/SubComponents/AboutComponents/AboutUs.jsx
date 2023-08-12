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
    <div class="container-fluid pt-5 wow fadeInUp animate__animated animate__fadeInUp" data-wow-delay="0.1s">
       <div class="container py-5">
         <div class="row g-5">
           <div class="col-lg-7">
             <div class="section-title position-relative pb-3 mb-5">
               <h5 class="fw-bold text-primary text-uppercase">About Us</h5>
               <h1 class="mb-0">
                 The Best IT Solution With 5 Years of Experience
               </h1>
             </div>
             <p class="mb-4">
               <h5>
               Aadvi Tech. Solutions, A Leading Provider of technology solutions for business of all sizes. Our team
of experts has a proven track record of delivering innovative, cost-effective and efficient
solutions for all the business.
</h5>
             </p>
             <div class="row g-0 mb-3">
               <div class="col-sm-6 wow zoomIn animate__animated animate__zoomIn" data-wow-delay="0.2s">
                 <h5 class="mb-3">
                   <i class="fa fa-check text-primary me-3"></i>
                   1.	Integrated Solutions 
                 </h5>
                 <h5 class="mb-3">
                   <i class="fa fa-check text-primary me-3"></i>
                   2.	Reliability
                 </h5>
               </div>
               <div class="col-sm-6 wow zoomIn animate__animated animate__zoomIn" data-wow-delay="0.4s">
                 <h5 class="mb-3">
                   <i class="fa fa-check text-primary me-3"></i>
                   3.	Responsiveness
                 </h5>
                 <h5 class="mb-3">
                   <i class="fa fa-check text-primary me-3"></i>
                   4.	Cost-effectiveness
                 </h5>
               </div>
             </div>
             <div
               class="d-flex align-items-center mb-4 wow fadeIn animate__animated animate__fadeIn"
               data-wow-delay="0.6s"
             >
               <div
                 class="bg-primary d-flex align-items-center justify-content-center rounded"
                 style={{width: "60px", height: "60px"}}
               > 
                 <i class="fa fa-phone-alt text-white"></i>
               </div>
               <div class="ps-4">
                 <h5 class="mb-2">Call us to ask any question</h5>
                 <h4 class="text-primary mb-0"> 8121913759</h4>
               </div>
             </div>
           </div>
           <div class="col-lg-5" style={{minHeight: "500px"}}>
             <div class="position-relative h-100">
               <img
                 class="position-absolute w-100 h-100 rounded wow  animate__animated animate__zoomIn"
                 data-wow-delay="0.9s"
                 src={require('../../Assets/image/about.jpg')}
                 alt="About"
                 style={{objectFit: "cover"}}
               />
             </div>
           </div>
         </div>
       </div>
       </div>
       </div>

  )
}
