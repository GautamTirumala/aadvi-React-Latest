
import { Link } from 'react-router-dom'; 
import '../../Assets/css/servicePages.css'; 
 
export default function WebDevelopment() { 
  return ( 
    <div> 
       <section style={{ background: "#06A3DA" }}> 
        <div className="container p-2"> 
          <div className="d-flex justify-content-between align-items-center"> 
            <h2 style={{ fontSize: "1.5rem", paddingTop: "10px", color: "#fff" }}>Web Development</h2> 
            <div className='links'> 
              <ol style={{ paddingTop: "10px" }}> 
                <li style={{ fontSize: "1.1rem"}}><Link to="/"> Home   /  </Link></li> 
                <li style={{ fontSize: "1.1rem"}}><Link to="/services">   Services  /  </Link></li> 
                <li style={{fontSize: "1.1rem", color: "#FFF", fontWeight: '500' }}>Web Development</li> 
              </ol> 
            </div> 
          </div> 
        </div> 
      </section> 
      <div className="container py-3"> 
        <div className="row"> 
          <div className="col-lg-7 about mt-3"> 
            <h5 className="mb-3">Web Development</h5> 
            <p>We offer custom web development services" means that we provide specialized assistance in creating and building websites that are tailored to the unique needs and requirements of individual businesses.</p>
            <p>Our services are designed to "help businesses build their online presence." This means that we assist companies in establishing a strong and effective representation on the internet. Having an online presence involves having a website that accurately reflects the company's brand, products, and services, making it easier for potential customers to find and interact with the business.</p>
            <p>Furthermore, we aim to help businesses "reach a larger audience." This implies that our custom web development services are geared towards expanding the business's visibility and accessibility. By creating well-designed websites, we enable businesses to attract more visitors and potential customers, ultimately increasing their reach and engagement with a wider demographic.</p>
            {/* Rest of the content */} 
          </div> 
          <div className='col-lg-5'> 
            <img src={require('../../Assets/image/webdevelopment.jpg')} className="img-fluid" alt="Web Development" /> 
          </div> 
        </div> 
        <div className="row"> 
          <div className="col-12"> 
          <p>In summary, our custom web development services are focused on designing and building unique websites for businesses, enhancing their online presence, and facilitating their ability to connect with a broader audience on the internet.</p>            {/* Rest of the content */} 
          </div> 
        </div> 
      </div> 
    </div> 
  ) 
} 