import React from "react";
export default function CoreValues() {
  return (
    <>
        <div
          class="container-fluid py-2 wow fadeInUp animate__animated animate__fadeInUp py-lg-5"
          data-wow-delay="0.1s"
        >
          <div class="container ">
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
                          <li className="mb-3" style={{display:'inline-block'}}><strong><span><img height={35} style={{verticalAlign:'bottom'}} src={require('../../Assets/image/Aadvi-Aa.png')}></img></span>ccountability:</strong>We recognize the significance of Accountability in fostering strong connections. Committed to clients, employees, and stakeholders, we take responsibility for our actions. By holding ourselves to their standards, we deliver tailored solutions, building trust through unwavering support and reliability.</li>
                          <li className="mb-3" style={{display:'inline-block'}}><strong><span><img height={27} style={{verticalAlign:'bottom'}} src={require('../../Assets/image/aadvi-a.png')}></img></span><span style={{paddingLeft:'3px'}}/>dvancement:</strong>Advancement fuels our core values. Propelled by an urge for continuous progress, we strive for peak performance, client contentment, and exceptional outcomes. Cultivating an advancing culture, we consistently surpass expectations</li>
                          <li className="mb-3" style={{display:'inline-block'}}> <strong><span><img height={30} style={{verticalAlign:'bottom',paddingLeft:'2px'}} src={require('../../Assets/image/aadvi-d.png')}></img></span><span style={{paddingLeft:'3px'}}/>iligence:</strong>  We approach every task with unwavering dedication and diligence. We are committed to delivering high-quality solutions and services that meet and exceed our clients' expectations. Through our meticulous attention to detail and thoroughness, we ensure that our work is precise, reliable, and of the highest standard. </li>
                          <li className="mb-3" style={{display:'inline-block'}}><strong><span><img height={30} style={{verticalAlign:'bottom'}} src={require('../../Assets/image/aadvi-v.png')}></img></span>erity:</strong> We believe in transparency, integrity, and honesty in all our interactions. We uphold the highest ethical standards and maintain open and honest communication with our clients, employees, and partners. By fostering an environment of trust, we build long-lasting relationships based on mutual respect and transparency.  </li>
                        
                        
                        <li style={{display:'inline-block'}}><strong><span><img height={30} style={{verticalAlign:'bottom',paddingLeft:'5px'}} src={require('../../Assets/image/aadvi-i.png')}></img></span><span style={{paddingLeft:'3px'}}/>ngenuity:</strong>  In a rapidly evolving industry, innovation and creative problem-solving are essential. We encourage our team members to think outside the box, embrace new technologies, and explore inventive approaches. By fostering an environment that values ingenuity, we stay at the forefront of industry trends and deliver innovative solutions to our clients. </li>
                        
                    </ul>
               </p>
               </div>
             

               
           
          </div>
        </div>
      </div>
    </>
  );
}
