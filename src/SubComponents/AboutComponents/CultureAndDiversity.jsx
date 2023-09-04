import React from "react";
export default function CultureAndDiversity(){
    return(
         <div class="container-fluid py-3 wow fadeInUp animate__animated animate__fadeInUp" data-wow-delay="0.1s">
       <div class="container">
         <div class="row g-5">
           <div class="col-lg-7">
             <div class="section-title position-relative pb-3 mb-5">
               <h5 class="fw-bold text-primary text-uppercase">Our Services</h5>
             </div>
             <div class="spaced-paragraph">
              <p>
             1.	IT Consulting: Our seasoned consultants offer expert guidance and strategic insights to help businesses align their technology investments with their overall goals and objectives.
             </p>
             </div>
             <div class="spaced-paragraph">
              <p>
             2.	Infrastructure Solutions: We design, implement, and manage robust IT infrastructure solutions, including network architecture, hardware procurement, virtualization, and cloud services, tailored to the specific needs of our clients.
             </p>
             </div>
             <div class="spaced-paragraph">
              <p>
             3.Application Development: Our experienced development team crafts custom software applications, web and mobile solutions, and enterprise-grade software integrations that drive operational efficiency and enhance user experiences.
             </p>
             </div>
             <div class="spaced-paragraph">
              <p>
             4.	Security and Compliance: We prioritize the protection of our clients' digital assets. Our comprehensive security and compliance solutions encompass vulnerability assessments, data protection, threat management, and regulatory compliance.
             </p>
             </div>
             <div class="spaced-paragraph">
              <p>
             5.	Managed Services: We offer ongoing IT support and maintenance services, including system monitoring, troubleshooting, patch management, and help desk support, ensuring optimal performance and minimizing downtime.
             </p>
             </div>
             <div class="spaced-paragraph">
              <p>
                       At Aadvi Tech Solutions, we pride ourselves on our commitment to excellence, customer-centric approach, and unwavering dedication to exceeding expectations. Partner with us to unlock the full potential of your technology investments and achieve your business objectives.
             </p>
             </div>
          </div>
           <div class="col-lg-5" style={{minHeight: "500px"}}>
             <div class="position-relative h-100">
               <img
                 class="position-absolute w-100 h-100 rounded wow zoomIn animate__animated animate__zoomIn "
                 data-wow-delay="0.9s"
                 src={require('../../Assets/image/handMeeting.jpg')}
                 alt="About"
                 style={{objectFit: "cover"}}
               />
             </div>
           </div>
         </div>
       </div>
     </div>
     )
     }
  
