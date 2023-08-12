import React from "react";
export default function CoreValues() {
  return (
    <>
        <div
          class="container-fluid py-5 wow fadeInUp animate__animated animate__fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="container py-5">
            <div class="row g-5">
            {/* <div class="col-lg-5" style={{ minHeight: "500px" }}>
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded wow  animate__animated animate__zoomIn"
                    data-wow-delay="0.9s"
                    src={require("../Assets/image/whyAadviImg.jpg")}
                    alt="About"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div> */}
              <div class="col-lg-12">
                <div class="section-title position-relative pb-3 mb-3">
                  <h5 class="fw-bold text-primary text-uppercase">
                  Our Value System
                  </h5>
                  <h1 class="mb-0">Guided by Core Values</h1>
                </div>
                <p style={{ textAlign: "justify" }}>
                
                    <ul style={{listStyle: "none", paddingLeft : "0"}}> 
                        <li> <strong>Diligence:</strong>  We approach every task with unwavering dedication and diligence. We are committed to delivering high-quality solutions and services that meet and exceed our clients' expectations. Through our meticulous attention to detail and thoroughness, we ensure that our work is precise, reliable, and of the highest standard. </li>
                        <li><strong>Empathy:</strong>  We understand the importance of empathy in building meaningful relationships. We genuinely care about the needs and aspirations of our clients, employees, and stakeholders. By putting ourselves in their shoes, we strive to provide personalized solutions and support that address their unique challenges and concerns. </li>
                        <li><strong>Excellence:</strong>  Excellence is at the heart of everything we do. We are driven by a passion for continuous improvement and a commitment to achieving the highest levels of performance and client satisfaction. By fostering a culture of excellence, we challenge ourselves to go above and beyond, consistently delivering exceptional results. </li>
                        <li><strong>Ingenuity:</strong>  In a rapidly evolving industry, innovation and creative problem-solving are essential. We encourage our team members to think outside the box, embrace new technologies, and explore inventive approaches. By fostering an environment that values ingenuity, we stay at the forefront of industry trends and deliver innovative solutions to our clients. </li>
                        <li><strong>Verity:</strong> We believe in transparency, integrity, and honesty in all our interactions. We uphold the highest ethical standards and maintain open and honest communication with our clients, employees, and partners. By fostering an environment of trust, we build long-lasting relationships based on mutual respect and transparency. 
                            These core values shape our organizational culture and define who we are as a company. They guide our decision-making, inspire our team, and contribute to our success in delivering exceptional IT consulting and solutions. At Aadvi Tech Solutions, we are committed to living these values every day, empowering our clients and helping them achieve their business goals with confidence. </li>
                    </ul>
               </p>
               </div>
             

               
           
          </div>
        </div>
      </div>
    </>
  );
}
