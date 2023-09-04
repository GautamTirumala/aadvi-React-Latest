import React from "react";
export default function OurMissionOurVision(){
    return(
        <>
    <div class="container-fluid py-lg-5 wow fadeInUp animate__animated animate__fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                {/* <h5 class="fw-bold text-primary text-uppercase"></h5> */}
                <h1 class="mb-0">We Are Here to Grow Your Business Exponentially</h1>
            </div>
            <div class="row g-5">
                <div class="col-lg-4">
                    <div class="row g-5">
                        <div class="col-12 wow zoomIn animate__animated animate__zoomIn" data-wow-delay="0.6s">
                            <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>
                                {/* <i class="fa fa-award text-white"></i> */}
                                <i class="fa fa-light fa-bullseye text-white"></i>
                            </div>
                            <h4>Our Mission</h4>
                            
                            <p class="mb-0">
                            Our belief in the value of trust, transparency and flexibility, powered by our philosophy of 'customers first', ensures our commitment to customers.
                       </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4  wow zoomIn animate__animated animate__zoomIn" data-wow-delay="0.9s" style={{minHeight: "350px"}}>
                    <div class="position-relative h-100">
                        <img class="position-absolute w-100 h-100 rounded wow zoomIn animate__animated animate__zoomIn" data-wow-delay="0.1s"  src={require('../../Assets/image/handshake-1.png')} style={{objectFit: "cover"}}/>
                    </div>
                </div>
                <div class="col-lg-4">


                    
                    <div class="row g-5">
                        
                        <div class="col-12 wow zoomIn animate__animated animate__zoomIn" data-wow-delay="0.8s">
                            <div class="bg-primary rounded d-flex align-items-center justify-content-center mb-3" style={{width: "60px", height: "60px"}}>

                                <i class="fa fa-eye text-white" ></i>

                            </div>
                            <h4>Our Vision</h4>
                            <p class="mb-0">
                            To become the leading provider of innovative business' IT Solutions, delivering exceptional value to our clients.
								</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}