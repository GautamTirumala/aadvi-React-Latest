import React from "react"; 
import { Link, NavLink } from "react-router-dom"; 
export default function CareersInHome() { 
  return ( 
    <> 
      <section class="cantainer"> 
        <div class="container container_home"> 
          <div 
            class="section-title text-center position-relative pb-3 mb-5 mx-auto" 
            style={{ maxWidth: "600px" }} 
          > 
            <h5 class="fw-bold text-primary text-uppercase">Careers</h5> 
            <h1 class="mb-0"> 
            Limitless growth, support, innovation, and meaningful impact. 
            </h1> 
          </div> 
 
          <p style={{ textAlign: "justify" }}> 
          Aadvi Tech Solutions stands as a burgeoning force in the realm of Consulting and Technology Staffing Companies, wielding an extensive repertoire of services and solutions that span the spectrum of Business and IT Consulting. At the core of our mission is the unwavering commitment to empower our clients, granting them the strategic tools needed to not only outpace their competitors but also to maintain an unwavering lead in the ever-evolving landscape of innovation.
          <br/>
          With an unwavering dedication to excellence, we have positioned ourselves as pioneers in the industry, offering unparalleled expertise to guide businesses through the intricate maze of challenges that modern enterprises face. Our holistic approach encompasses a multifaceted array of services, all designed to cater to the unique needs of our diverse clientele. From offering insightful strategic guidance to furnishing cutting-edge technological solutions, we ensure that every interaction with Aadvi Tech Solutions is a step towards achieving unprecedented success.
          <br/>
          As the digital era continues to usher in transformative changes, Aadvi Tech Solutions remains steadfast as a beacon of adaptability and progress. Our team of seasoned professionals, armed with a wealth of experience and a penchant for innovation, work in tandem to provide tailor-made strategies and bespoke technological implementations. We don't merely assist our clients in keeping up with the pace of change; we empower them to stride confidently ahead, carving their path in the competitive business landscape.
          </p> 
        </div> 
        <div className="center-button d-flex align-items-center justify-content-center"> 
      <button className="btn btn-primary"><NavLink to="/career">Know More..</NavLink></button> 
    </div> 
 
      </section> 
    </> 
  ); 
} 