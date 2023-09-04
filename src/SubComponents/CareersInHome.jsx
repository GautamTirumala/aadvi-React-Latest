import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function CareersInHome() {
  return (
    // <>
    //   <div
    //     class="section-title text-center position-relative pb-3 mb-5 mx-auto"
    //     style={{ maxWidth: "600px" }}
    //   >
    //     <h5 class="fw-bold text-primary text-uppercase">Careers</h5>
    //     <h1 class="mb-0">
    //       Limitless growth, support, innovation, and meaningful impact.
    //     </h1>
    //   </div>
    //   <section class="cantainer row g-5">
    //     <div class="col-lg-5" style={{ minHeight: "400px" }}>
    //       <div class="position-relative h-100">
    //         <img
    //           class="position-absolute w-100 h-100 rounded wow  animate__animated animate__zoomIn"
    //           data-wow-delay="0.9s"
    //           src={require("../Assets/image/careers.jpg")}
    //           alt="About"
    //           style={{ objectFit: "cover" }}
    //         />
    //       </div>
    //     </div>
    // <div class="container container_home col-lg-7">
    //   <p style={{ textAlign: "justify" }}>
    //     Aadvi Tech Solutions stands as a burgeoning force in the realm of
    //     Consulting and Technology Staffing Companies, wielding an extensive
    //     repertoire of services and solutions that span the spectrum of
    //     Business and IT Consulting. At the core of our mission is the
    //     unwavering commitment to empower our clients, granting them the
    //     strategic tools needed to not only outpace their competitors but
    //     also to maintain an unwavering lead in the ever-evolving landscape
    //     of innovation.
    //     <br />
    //     With an unwavering dedication to excellence, we have positioned
    //     ourselves as pioneers in the industry, offering unparalleled
    //     expertise to guide businesses through the intricate maze of
    //     challenges that modern enterprises face. Our holistic approach
    //     encompasses a multifaceted array of services, all designed to cater
    //     to the unique needs of our diverse clientele. From offering
    //     insightful strategic guidance to furnishing cutting-edge
    //     technological solutions, we ensure that every interaction with Aadvi
    //     Tech Solutions is a step towards achieving unprecedented success.
    //     <br />
    //     As the digital era continues to usher in transformative changes,
    //     Aadvi Tech Solutions remains steadfast as a beacon of adaptability
    //     and progress. Our team of seasoned professionals, armed with a
    //     wealth of experience and a penchant for innovation, work in tandem
    //     to provide tailor-made strategies and bespoke technological
    //     implementations. We don't merely assist our clients in keeping up
    //     with the pace of change; we empower them to stride confidently
    //     ahead, carving their path in the competitive business landscape.
    //   </p>
    // </div>

    //   </section>
    // </>

    <>
      <div>
        <div
          class="container-fluid py-5 wow fadeInUp animate__animated animate__fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="container py-5">
            {/* <div className="d-flex justify-content-center align-items-center">
          <div class="section-title position-relative pb-3 mb-3 wow fadeInUp animate__animated animate__fadeInUp"  style={{maxWidth: "600px"}}>
                  <h5 class="fw-bold text-primary text-uppercase">Careers</h5>
                  <h1 class="mb-0">
                    Limitless growth, support, innovation, and impact.
                  </h1>
                </div>
                </div> */}
                <div class="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{maxWidth: "600px"}}>
                <h5 class="fw-bold text-primary text-uppercase">Careers</h5>
                <h1 class="mb-0">Limitless growth, support, innovation, and impact.</h1>
            </div>
            <div class="row g-5">
            
              <div class="col-lg-5" style={{ minHeight: "400px" }}>
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 wow  animate__animated animate__zoomIn"
                    data-wow-delay="0.4s"
                    src={require("../Assets/image/careers.jpg")}
                    alt="About"
                    style={{
                      objectFit: "cover",
                      boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
                      borderRadius: "20px",
                      minHeight:'450px'
                    }}
                  />
                </div>
              </div>
              <div class="col-lg-7">
                
                <p
                  className="wow fadeInUp animate__animated animate__fadeInUp"
                  style={{ textAlign: "justify" }}
                >
                  
                  <p style={{ marginBottom: "10px", marginTop:'20px' }}>
                  Elevate your career with Aadvi Tech Solutions. Join our innovative team, passionate about consulting and technology, and unlock your potential for success.
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                    Why Choose Aadvi Tech Solutions for Your Career?
                  </p>
                  <p style={{ marginBottom: "10px" }}>
                  <strong>Growth Opportunities:</strong>We nurture talent, fostering growth and learning, whether you're starting or an experienced professional
                  </p>
                  <p style={{ marginBottom: "10px" }}></p>
                  <strong>Cutting-Edge Projects:</strong> We work on projects at the forefront of technology and innovation. Join us, and you'll have the opportunity to tackle challenging assignments that push the boundaries of what's possible. 
                  <p style={{ marginBottom: "10px" }}><strong>Collaborative Culture:</strong> Collaboration is at the heart of our culture. We believe in the power of teamwork and diverse perspectives to deliver exceptional results.</p>
                  <p style={{ marginBottom: "10px" }}><strong>Work-Life Balance:</strong> We understand the importance of work-life balance. Our flexible work arrangements ensure that you can achieve professional success without compromising your personal life.</p>
                </p>
                <div className="center-button d-flex align-items-center justify-content-center">
                  <button className="btn btn-primary">
                    <NavLink to="/career">Know More..</NavLink>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
