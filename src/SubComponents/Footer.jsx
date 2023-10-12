import React, { useEffect, useState } from 'react'
import $ from "jquery"
import 'animate.css';
import WOW from "wowjs"
import aadvi_logo from "../Assets/img1/aadvi-logo.png"
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';


function Footer() {
    const d = new Date();
    let year = d.getFullYear();
    const currentPage = window.location.pathname;


    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const BackToTophandleClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    useEffect(() => {
        // Spinner 
        var spinner = function () {
            setTimeout(function () {
                if ($('#spinner').length > 0) {
                    $('#spinner').removeClass('show');
                }
            }, 1);
        };
        spinner();

        // Initiate the wowjs 
        new WOW.WOW({
            live: false
        }).init();


        // Sticky Navbar 
        // $(window).scroll(function () { 
        //     if ($(this).scrollTop() > 45) { 
        //         $('.navbar').addClass('sticky-top shadow-sm'); 
        //     } else { 
        //         $('.navbar').removeClass('sticky-top shadow-sm'); 
        //     } 
        // }); 
    }, [])

    return (
        <div>
            <div class="google-map  wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60898.38221115843!2d78.3181480216797!3d17.452586499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91fb7d6737a3%3A0xaa6030a25754c89a!2sAadvi%20Tech%20Solutions!5e0!3m2!1sen!2sin!4v1689154164493!5m2!1sen!2sin " width="600" height="450" style={{ border: "0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            {/* <!-- Footer Start --> */}
            <div class="container-fluid bg-dark text-light wow fadeInUp" data-wow-delay="0.1s">
                <div class="container">
                    <div class="row gx-5">
                        <div class="col-lg-4 col-md-6 footer-about">
                            <div class="d-flex flex-column align-items-center justify-content-center text-center h-100 footer-logo-color p-4">
                                <Link to="/" class="navbar-brand">
                                    {/* <!-- <h1 class="m-0 text-white"><i class="fa fa-user-tie me-2"></i>Startup</h1> --> */}
                                    <img style={{ height: "3em", width: "9em;" }} src={aadvi_logo} alt="Image"></img>

                                </Link>
                                <p class="mt-3 mb-4">Aadvi Tech. Solutions, A Leading Provider of technology solutions for business of all sizes.</p>
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-6 d-flex justify-content-around ">
                            <div class="row gx-5">
                                <div class="col-lg-6 col-md-12 pt-5 mb-5">
                                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 class="text-light mb-0">Get In Touch</h3>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-geo-alt text-primary me-2"></i>
                                        <p class="mb-0">Plot No: 467, 1st Floor, Gowri Shankar Nilayam, Madhapur, Telangana 500081</p>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-envelope-open text-primary me-2"></i>
                                        <p class="mb-0">hr@aadvisolutions.com</p>
                                    </div>
                                    <div class="d-flex mb-2">
                                        <i class="bi bi-telephone text-primary me-2"></i>
                                        <p class="mb-0">+91 8121913759</p>
                                    </div>
                                    <div class="d-flex mt-4">
                                        <a class="btn btn-primary btn-square me-2" href="https://twitter.com/aadvisolutions" target='_blank'><i class="fab fw-normal fa-brands fa-x-twitter"></i></a>
                                        <a class="btn btn-primary btn-square me-2" href="https://www.facebook.com/AadviTechSolutions" target='_blank'><i class="fab fa-facebook-f fw-normal"></i></a>
                                        <a class="btn btn-primary btn-square me-2" href="https://www.linkedin.com/company/aadvitechsolutions/" target='_blank'><i class="fab fa-linkedin-in fw-normal"></i></a>
                                        <a class="btn btn-primary btn-square me-2" href="https://www.youtube.com/channel/UCe78R6CjiC_S-HjyOfmy1wA" target="_blank" >
                                            <i className="fab fa-youtube fw-normal"></i>
                                        </a>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-12 pt-0 pt-lg-5 mb-5">
                                    <div class="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 class="text-light mb-0">Quick Links</h3>
                                    </div>
                                    <div class="link-animated d-flex flex-column justify-content-start">
                                        <Link class="text-light mb-2" to="/"><i class="bi bi-arrow-right text-primary me-2"></i>Home</Link>
                                        <Link class="text-light mb-2" to="/about"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</Link>
                                        <Link class="text-light mb-2" to="/services"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</Link>
                                        <Link class="text-light mb-2" to="career"><i class="bi bi-arrow-right text-primary me-2"></i>Careers</Link>
                                        <Link class="text-light" to="/contact"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link>
                                    </div>
                                </div>
                                {/* <div class="col-lg-4 col-md-12 pt-0 pt-lg-5 mb-5"> 
                            <div class="section-title section-title-sm position-relative pb-3 mb-4"> 
                                <h3 class="text-light mb-0">Popular Links</h3> 
                            </div> 
                            <div class="link-animated d-flex flex-column justify-content-start"> 
                                <Link class="text-light mb-2" to="/"><i class="bi bi-arrow-right text-primary me-2"></i>Home</Link> 
                                <Link class="text-light mb-2" to="/about"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</Link> 
                                <Link class="text-light mb-2" to="/services"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</Link> 
                                <Link class="text-light mb-2" to="/career"><i class="bi bi-arrow-right text-primary me-2"></i>Careers</Link> 
                                <Link class="text-light" to="/contact"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</Link> 
                            </div> 
                        </div>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid text-white" style={{ backgroundColor: "#061429" }}>
                <div class="container text-center">
                    <div class="row justify-content-end">
                        <div class="col-lg-8 col-md-6">
                            <div class="d-flex align-items-center justify-content-center" style={{ height: "75px" }}>
                                <p class="mb-0">&copy; <span class="mb-0 mx-1" >{year}</span> <Link class="text-white border-bottom" to="/"> Aadvi Tech. Solutions</Link>. All Rights Reserved.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='back-to-top-container'>
                {showTopBtn && (
                    <Link
                        to={currentPage}
                        onClick={BackToTophandleClick}
                        className="btn btn-lg btn-primary btn-lg-square back-to-top"
                        title="Scroll Up" // Add the title attribute for the tooltip
                    >
                        <i className="bi bi-arrow-up"></i>
                    </Link>
                )}
            </div>

        </div>
    )
}

export default Footer