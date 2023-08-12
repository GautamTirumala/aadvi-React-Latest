import React from 'react';
import { Link } from 'react-router-dom';
import '../../Assets/css/servicePages.css';

export default function WebDevelopment() {
  return (
    <div>
       <section style={{ background: "#06A3DA" }}>
        <div className="container p-2">
          <div className="d-flex justify-content-between align-items-center">
            <h2 style={{ fontSize: "1.5rem", paddingTop: "10px", color: "#fff" }}>Staffing Solutions</h2>
            <div className='links'>
              <ol style={{ paddingTop: "10px" }}>
                <li style={{ fontSize: "1.1rem"}}><Link to="/"> Home   /  </Link></li>
                <li style={{ fontSize: "1.1rem"}}><Link to="/services">   Services  /  </Link></li>
                <li style={{fontSize: "1.1rem", color: "#FFF", fontWeight: '500' }}>Staffing Solutions</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 about mt-3">
            <h5 className="mb-3">Permanent Staffing</h5>
            <p>In our "Permanent Staffing" solution, candidates become an integral part of our team, receiving consistent remuneration during the defined period. We ensure a seamless transition by providing a mutual agreement that grants the client company the option to hire the candidate as a full-time employee at a later stage. This approach not only guarantees workforce stability but also presents an opportunity to assess the candidate's compatibility before extending a permanent offer.</p>
          </div>
          <div className='col-lg-5'>
            <img src={require('../../Assets/image/staffing sol.jpg')} className="img-fluid" alt="Web Development" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
          <h5 className="mb-3">Contract to Hire</h5>
          <p>Our unique "Contract to Hire" strategy goes beyond recruitment. We cultivate new talents through hands-on involvement in real-time projects. These candidates are groomed to be industry-ready and are then deployed to our clients. This distinctive process offers clients the advantage of accessing skilled resources while also evaluating their potential fit within the organization. It's more than recruitment; it's the initiation of a promising professional journey.</p>
          <h5 className="mb-3">Placement Services</h5>
          <p>With our "Placement Services," we facilitate the ideal match between skilled candidates and specific projects or timeframes. Whether for a fixed duration or a particular project's lifecycle, we identify candidates who possess the requisite expertise to contribute effectively. This arrangement ensures that your workforce remains dynamic, adaptable, and precisely aligned with project requirements.</p>
          <h5 className="mb-3">Contract Staffing</h5>
          <p>Our "Contract Staffing" solution provides a direct avenue for top-tier talent to integrate seamlessly into your company's operations. Through this approach, candidates are placed within your organization under our guidance. This fosters a collaborative environment where your team can access specialized skills and knowledge for the duration required. The result is a workforce that complements your goals and enhances overall productivity.</p>
          <h5 className="mb-3">Train and Deploy</h5>
          <p>Our innovative "Train and Deploy" methodology is the cornerstone of our recruitment process. Beyond conventional hiring, we invest in nurturing emerging talent by exposing them to real-world projects. This immersive experience equips candidates with practical skills, ensuring they are industry-ready upon deployment. Our approach doesn't just fill positions; it forges skilled professionals who are poised to make impactful contributions from day one.</p>
          <p>In essence, our recruitment process is more than a transaction; it's a holistic approach that encompasses preparation, engagement, and alignment. By offering diverse staffing solutions, we empower organizations to acquire, nurture, and optimize their workforce for sustained success.</p>
            {/* Rest of the content */}
          </div>
        </div>
      </div>
    </div>
  )
}