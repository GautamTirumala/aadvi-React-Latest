import { useEffect, useState } from "react"; 
 
import About from "./Components/About"; 
import Contacts from "./Components/Contacts"; 
import Home from "./Components/Home"; 
import Careers from "./Components/Careers"; 
import Services from "./Components/Services"; 
import Footer from "./SubComponents/Footer"; 
import { Route, Routes } from "react-router-dom"; 
import { Link } from "react-router-dom"; 
import { useLocation } from 'react-router-dom'; 
import Navbar from "./SubComponents/Navbar"; 
import Carousel123 from "./SubComponents/Carosel"; 
import ImagePage from "./SubComponents/ImagePage"; 
import $ from "jquery"; 
import WOW from "wowjs"; 
import WebDevelopment from "./SubComponents/ServicesPages/WebDevelopment"; 
import WebDesign from "./SubComponents/ServicesPages/WebDesign"; 
import IOT from "./SubComponents/ServicesPages/IOT"; 
import Staffing_Solutions from "./SubComponents/ServicesPages/StaffingSolutions"; 
import MobileApp from "./SubComponents/ServicesPages/MobileApp"; 
import Testing from "./SubComponents/ServicesPages/Testing";
import Chatbot from "./SubComponents/ChatBot/Chatbot"
 
function App() { 
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };
  const currentPage = window.location.pathname; 
 const location= useLocation();
 

 const [wowInitialized, setWowInitialized] = useState(false);

 useEffect(() => {
   if (!wowInitialized) {
     const wow = new WOW.WOW();
     wow.init();
     setWowInitialized(!wowInitialized);
   }
 }, [location, wowInitialized]);

 useEffect(()=>{
  window.scrollTo(0,0);
},[location])
  useEffect(() => {
    // Spinner 
    var spinner = function () { 
      setTimeout(function () { 
        if ($("#spinner").length > 0) { 
          $("#spinner").removeClass("show"); 
        } 
      }, 1); 
    }; 
    spinner(); 
    new WOW.WOW({ 
      live: false, 
    }).init(); 
  }, []); 

  useEffect(()=>{
    
    if(location.pathname !== '/' && location.pathname !=='/web_development' && location.pathname !=='/web_design' && location.pathname !=='/staffing_solutions' && location.pathname !=='/mobile_apps' && location.pathname !=='/testing' && location.pathname !=='/iot'){
    // window.scrollTo(0,900);
    const windowHeight = window.innerHeight;
    const scrollPosition = windowHeight * 1.3; 
    window.scrollTo(0,scrollPosition);
    }
    else{
      window.scrollTo(0,0)
    }
    
  },[location.pathname])
 

 
 
  return ( 
    <div> 
      {/* <!-- Spinner Start --> */} 
      <div 
        id="spinner" 
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center" 
      > 
        <div class="spinner"></div> 
      </div> 
      {/* <div
        className={`chatbot-toggle ${chatbotVisible ? 'active' : ''}`}
        onClick={toggleChatbot}
      >
        How can I help you?
      </div> */}
      {/* {chatbotVisible && <Chatbot />} */}
      <Navbar  /> 
      {currentPage === "/" ? (
        <Carousel123 />
      ) : currentPage === "/web_development" ||
        currentPage === "/web_design" ||
        currentPage === "/staffing_solutions" ||
        currentPage === "/mobile_apps" ||
        currentPage === "/testing" ||
        currentPage === "/iot" ? null : (
          currentPage === "/about" && (
            <ImagePage
              title={`Navigating Success Together `}
              page={currentPage.substring(1, 2).toUpperCase() + currentPage.substring(2)+ " Us"}
            />
          ) ||
        currentPage === "/career" && <ImagePage
          title={`Path To Success`}
          page={currentPage.substring(1, 2).toUpperCase() + currentPage.substring(2)}

        /> ||
        currentPage === "/services" && <ImagePage
          title={`Empowering Through Services`}
          page={currentPage.substring(1, 2).toUpperCase() + currentPage.substring(2)}

        /> ||
        currentPage === "/contact" && <ImagePage
          title={`Let's stay in Touch`}
          page={currentPage.substring(1, 2).toUpperCase() + currentPage.substring(2)}

        />
      )}
 
      <Routes> 
        <Route exact path="/" element={<Home />}></Route> 
        <Route exact path="/about" element={<About />}></Route> 
        <Route exact path="/career" element={<Careers />}></Route> 

        <Route 
          exact 
          path="/web_development" 
          element={<WebDevelopment />} 
        ></Route> 
        <Route exact path="/web_design" element={<WebDesign />}></Route> 
        <Route exact path="/mobile_apps" element={<MobileApp />}></Route> 
        <Route exact path="/iot" element={<IOT />}></Route> 
        <Route 
          exact 
          path="/Staffing_Solutions" 
          element={<Staffing_Solutions />} 
        ></Route> 
      </Routes> 
      <div className="pt-3"> 
      <Routes> 
        <Route exact path="/services" element={<Services />}></Route> 
        <Route exact path="/contact" element={<Contacts/>}></Route>
        <Route exact path="/testing" element={<Testing/>}></Route>

      </Routes>
      </div>
      <Footer /> 
    </div>
  ); 
} 
 
export default App; 