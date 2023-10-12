import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
export default function Navbar() {
  const location = useLocation();
  const [activePage, setActivePage] = useState("");
  useEffect(() => {
    setActivePage(location.pathname);
  }, [location.pathname]);

  const home = activePage === "/";
  const about = activePage === "/about";
  const service =
    activePage === "/services" ||
    activePage === "/web_development" ||
    activePage === "/web_design" ||
    activePage === "/staffing_solutions" ||
    activePage === "/iot" ||
    activePage === "/mobile_apps";
  const career = activePage === "/career";
  const contact = activePage === "/contact";
  const [isOpen, setIsOpen] = useState(false);
  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container-fluid bg-dark px-5 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <small className="me-3 text-light">
                <a style={{ color: "#fff" }} target="_blank" href="https://www.google.com/maps/place/Aadvi+Tech+Solutions/@17.452587,78.390246,12z/data=!4m6!3m5!1s0x3bcb91fb7d6737a3:0xaa6030a25754c89a!8m2!3d17.4525865!4d78.3902458!16s%2Fg%2F11g0m45hq0?hl=en&entry=ttu"><i className="fa fa-map-marker-alt me-2"></i>Plot No: 467,
                  Madhapur, Hyderabad
                </a>
              </small>
              <small className="me-3 text-light">
                <i className="fa fa-phone-alt me-2"></i>+91 8121913759
              </small>
              <small className="text-light">
                <i className="fa fa-envelope-open me-2"></i>
                hr@aadvisolutions.com
              </small>
            </div>
          </div>
          <div className="col-lg-4 text-center text-lg-end">
            <div
              className="d-inline-flex align-items-center"
              style={{ height: "45px" }}
            >
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://twitter.com/aadvisolutions"
                target="_blank"
              >
                <i class="fab fw-normal  fa-x-twitter"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://www.facebook.com/AadviTechSolutions"
                target="_blank"
              >
                <i className="fab fa-facebook-f fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2"
                href="https://www.linkedin.com/company/aadvitechsolutions/"
                target="_blank"
              >
                <i className="fab fa-linkedin-in fw-normal"></i>
              </a>
              <a
                className="btn btn-sm btn-outline-light btn-sm-square rounded-circle"
                href="https://www.youtube.com/channel/UCe78R6CjiC_S-HjyOfmy1wA"
                target="_blank"
              >
                <i className="fab fa-youtube fw-normal"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* // carosel part */}
      <div className="container-fluid position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-lg-0">
          <Link to="/" className="navbar-brand p-0">
            <img
              style={{ height: "3em", width: "9em" }}
              src={require("../Assets/img1/aadvi-logo.png")}
              alt="Image"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link
                to="/"
                className={`nav-item nav-link text-dark ${home ? "active" : "inactive"
                  }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`nav-item nav-link text-dark ${about ? "active" : "inactive"
                  }`}
              >
                About Us
              </Link>
              <div
                className="dropdown"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <span onClick={toggleDropdown}>
                  {" "}
                  <Link
                    to="/services"
                    className={`nav-item text-dark nav-link dropdown-toggle ${service ? "active" : "inactive"
                      }`}
                    type="button"
                    id="dropdownMenuButton"
                    data-mdb-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Services
                  </Link>
                </span>
                {isOpen && (
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li>
                      <Link className="dropdown-item" to="/staffing_solutions">
                        Staffing Solutions
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/web_development">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/web_design">
                        Web Design
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/iot">
                        Internet Of Things
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/mobile_apps">
                        Mobile Apps
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/testing">
                        Testing
                      </Link>
                    </li>
                  </ul>
                )}
              </div>
              <Link
                to="/career"
                className={`nav-item text-dark nav-link ${career ? "active" : "inactive"
                  }`}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className={`nav-item text-dark nav-link ${contact ? "active" : "inactive"
                  }`}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
} 