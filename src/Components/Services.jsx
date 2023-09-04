import React from 'react'
import '../Assets/css/card.css'
import { Link } from 'react-router-dom'

function Services() {
  return (
    <div>
      
         <div class="container-fluid py-5 wow animate__animated animate__fadeInUp" data-wow-delay="0.1s">
        <div class="container">
            <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 class="fw-bold text-primary text-uppercase">Our Services</h5>
                <h1 class="mb-0">Custom IT Solutions for Your Successful Business</h1>
            </div>
            <div class=" row g-5  d-flex justify-content-center align-items-center">
                
                 {/* <!-- card-4 --> */}
                 <div class="box col-lg-4 col-md-6 col-12 wow animate__animated animate__zoomIn" data-wow-delay="0.6s">
                  <img
                    
                   src={require('../Assets/image/staffingsol.png')}
                    alt="Staffing Solutions"
                    width="50"
                    height="60"
                  />
                  <h3>Staffing Solutions</h3>
                  <p>
                  We offer diverse staffing solutions to empower organizations to acquire, nurture, and optimize their workforce for sustained success.
                  </p>
                  <Link to="/staffing_solutions"><button>Read More...</button></Link>
                </div>
                {/* <!-- card-1 --> */}
                <div class="box container-card col-12 col-lg-4 col-md-6 wow animate__animated animate__zoomIn service-item rounded" data-wow-delay="0.3s">
                  <img
                    
                   src={require('../Assets/image/web_dev.png')}
                   
                    alt="Web Development"
                    width="50"
                    height="60"
                  />
                  <h3>Web Development</h3>
                  <p>
                  We offer custom web development services that help businesses build their online presence and reach a
                  larger audience
                  </p>
                  <Link to="/web_development">
                    <button>Read More...</button>
                  </Link>
                </div>
                {/* <!-- Card-2 --> */}
                <div class="box col-lg-4 col-md-6 col-12 wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
                   <img
                   
                   src={require('../Assets/image/web_design.png')}
                   alt='Mobile Apps'
                   width='50'
                   height='60'
                 />
                  <h3>Web Design</h3>
                  <p>
                  Our team of experts creates unique and visually appealing web designs that help
                   businesses stand out online
                  </p>
                  <Link to="/web_design"><button>Read More...</button></Link>
                </div>
                {/* <!-- Card-3 --> */}
                <div class="box col-lg-4 col-md-6 col-12 wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
                  <img
                    src={require('../Assets/image/mobile_aaps.png')}
                    alt="Mobile Apps"
                    width="50"
                    height="60"
                  />
                  <h3>Mobile Apps</h3>
                  <p>
                  Our team of mobile app developers creates custom apps for businesses to help them reach customers, increase engagement, and improve
   efficiency
                  </p>
                  <Link to="/mobile_apps"><button>Read More...</button></Link>
                </div>
               
                {/* <!-- card-5 --> */}
                <div class="box col-lg-4 col-md-6 col-12 wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
                  <img
                   
                   src={require('../Assets/image/iot.png')}

                    alt="Internet Of Things"
                    width="50"
                    height="60"
                  />
                  <h3>Internet Of Things</h3>
                  <p>
                  Our team of IoT developers build custom apps that address manyreal-world issues
                  </p>
                  <Link to="/iot"><button>Read More...</button></Link>
                </div>
                <div class="box col-lg-4 col-md-6 col-12 wow animate__animated animate__zoomIn" data-wow-delay="0.3s">
                  <img
                   
                   src={require('../Assets/image/testingImg.png')}

                    alt="Testing"
                    width="50"
                    height="60"
                  />
                  <h3>Testing</h3>
                  <p>
                  Experience web excellence with us. Our holistic approach includes comprehensive testing services, ensuring your site excels in functionality and performance.
                  </p>
                  <Link to="/testing"><button>Read More...</button></Link>
                </div>
            </div>
            </div>
            </div>

    </div>
  )
}

export default Services