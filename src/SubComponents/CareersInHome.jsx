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
 
          <p> 
            Aadvi Tech. Solutions is an emerging Consulting & Technology 
            Staffing Company, providing wide range of services and solutions in 
            Business and IT Consulting. We enable our clients to outperform the 
            competition and stay ahead of the innovation curve.
          </p> 
        </div> 
        <div className="center-button d-flex align-items-center justify-content-center"> 
      <button className="btn btn-primary"><NavLink to="/career">Know More..</NavLink></button> 
    </div> 
 
      </section> 
    </> 
  ); 
} 