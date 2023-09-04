import React from 'react'
import "../Assets/css/style.css"


function Contacts() {
  return (
    <div>
        <div style={{ maxWidth: '70vw' }} class="container-fluid py-5 wow fadeInUp animate__animated animate__fadeInUp d-flex justify-content-center align-items-center" data-wow-delay="0.1s">
        <div class="container">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 class="fw-bold text-primary text-uppercase">Contact Us</h5>
                <h1 class="mb-0">If You Have Any Query, Feel Free To Contact Us</h1>
            </div>
            <div class="row g-5 mb-5">
                <div class="col-lg-6">
                    <div class="d-flex align-items-center wow fadeIn animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{minWidth: "55px", height: "60px"}}>
                            <i class="fa fa-phone-alt text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Call to ask any question</h5>
                            <h6 class="text-primary mb-0">+91 8121913759</h6>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-6">
                <div class="d-flex align-items-center wow fadeIn animate__animated animate__fadeInUp" data-wow-delay="0.1s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded" style={{minWidth: "55px", height: "60px"}}>
                            <i class="fa fa-envelope-open text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Email</h5>
                            <h6 class="text-primary mb-0">hr@aadvisolutions.com</h6>
                        </div>
                    </div>
                </div>
                {/* <div class="col-lg-4">
                    <div class="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                        <div class="bg-primary d-flex align-items-center justify-content-center rounded" style= {{width: "60px", height: "60px"}}>
                            <i class="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div class="ps-4">
                            <h5 class="mb-2">Visit Us</h5>
                            <h6 class="text-primary mb-0">Plot No.:467, Madhapur, Telangana 500081</h6>
                        </div>
                    </div>
                </div> */}
            </div>
            <div class="row g-5">
                <div class="col-lg-12 wow slideInUp animate__animated animate__slideInUp" data-wow-delay="0.3s">
                    <form action="https://formspree.io/f/meqbkenl" method="post">
                        <div class="row g-3">
                            <div class="col-md-6">
                                <input name="Full name" type="text" class="form-control border-0 bg-light px-4" placeholder="Your Name" style= {{height: "55px"}}/>
                            </div>
                            <div class="col-md-6">
                                <input name="Email" type="email" class="form-control border-0 bg-light px-4" placeholder="Your Email" style={{height: "55px"}}/>
                            </div>
                            <div class="col-12">
                                <input name="Subject" type="text" class="form-control border-0 bg-light px-4" placeholder="Subject" style={{height: "55px"}}/>
                            </div>
                            <div class="col-12">
                                <textarea name="Message" class="form-control border-0 bg-light px-4 py-3" rows="4" placeholder="Message"></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                {/* <div class="col-lg-6 wow slideInUp" data-wow-delay="0.6s">
                    <iframe class="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60898.38221115843!2d78.3181480216797!3d17.452586499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91fb7d6737a3%3A0xaa6030a25754c89a!2sAadvi%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1689154164493!5m2!1sen!2sin"
                        frameborder="0" style={{minHeight: "350px;", border:"0;"}} allowfullscreen=""ariaHidden="false"
                        tabindex="0"></iframe>
                </div> */}
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contacts