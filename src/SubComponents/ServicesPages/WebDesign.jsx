import React from 'react'; 
import { Link } from 'react-router-dom'; 
import '../../Assets/css/servicePages.css'; 
 
export default function WebDevelopment() { 
  return ( 
    <div> 
       <section style={{ background: "#06A3DA" }}> 
        <div className="container p-2"> 
          <div className="d-flex justify-content-between align-items-center"> 
            <h2 style={{ fontSize: "1.5rem", paddingTop: "10px", color: "#fff" }}>Web Design</h2> 
            <div className='links'> 
              <ol style={{ paddingTop: "10px" }}> 
                <li style={{ fontSize: "1.1rem"}}><Link to="/"> Home   /  </Link></li> 
                <li style={{ fontSize: "1.1rem"}}><Link to="/services">   Services  /  </Link></li> 
                <li style={{fontSize: "1.1rem", color: "#FFF", fontWeight: '500' }}>Web Design</li> 
              </ol> 
            </div> 
          </div> 
        </div> 
      </section> 
      <div className="container py-3"> 
        <div className="row"> 
          <div className="col-lg-8 about mt-3"> 
            <h5 className="mb-3"><strong>Web Design</strong></h5> 
            <p style={{ textAlign: 'justify' }}>Our "team of experts" in web design possesses a high level of knowledge and skill in crafting visually appealing and effective websites. When we say "unique and visually appealing web designs," we mean that our designs are distinct and eye-catching, setting businesses apart from the competition in the online space.</p>
            <p style={{ textAlign: 'justify' }}>These web designs are created with the intention to "help businesses stand out online." In today's digital landscape, where numerous websites exist for various purposes, it's crucial for a business to have a design that captures attention and leaves a lasting impression on visitors. Our designs are not only aesthetically pleasing but also strategically structured to convey the business's brand identity, products, and services in a memorable way.</p>
            {/* Rest of the content */} 
          </div> 
          <div className='col-lg-4 d-flex justify-content-center align-items-center'> 
            <img src={require('../../Assets/image/web design.jpg')} className="img-fluid" alt="Web Development" /> 
          </div> 
        </div> 
        <div className="row"> 
          <div className="col-12"> 
          <p style={{ textAlign: 'justify' }}>Through our web design expertise, we empower businesses to make a strong impact on their target audience. By presenting a visually engaging and unique website, businesses can attract and retain the attention of online visitors, making it more likely for them to explore further, engage with the content, and potentially convert into customers.</p> 
           <p style={{ textAlign: 'justify' }}>In essence, our team's proficiency in creating unique and visually appealing web designs plays a pivotal role in helping businesses establish a distinctive online presence that captivates users and sets them apart in the competitive digital landscape.</p>
            {/* Rest of the content */} 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 

