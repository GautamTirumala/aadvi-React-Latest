import React from "react";
import Marquee from "react-fast-marquee";

const collaboratorImages = [
  "AheadRace-logo.jpg",
  "BostonLogix-Logo.jpg",
  "Cigniti-Technologies.jpg",
  "GSPANN-Logo.jpg",
  "Hirexa-logo.jpg",
  "M3BI-Logo.jpg",
  "merit.jpg",
  "Amista .jpg",
  "Paccore-Logo.jpg",
  "samodified.jpg",
  "Softtek-logo.jpg",
  "Tectoro-logo.jpg",
  "unionSys.jpg",
  "Cloud-Connects-Logo3.jpg",
  "logo-sriventech.jpg"
];

export default function CompaniesCarousel() {
  return (
    <>
      <div
        className="section-title text-center position-relative py-3  mx-auto"
        style={{ maxWidth: "600px" }}
      >
        <h5 className="fw-bold text-primary text-uppercase">Our Clients</h5>
        <h1 className="mb-0">
          Partnerships drive growth, innovation, and shared achievements
        </h1>
      </div>
      <div
        className="container-fluid responsive py-1 wow animate__animated animate__fadeInUp h-80"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="bg-white">
            <Marquee speed="150">
              <div data-aos="fade-up">
                {collaboratorImages.map((image, index) => (
                  <span key={index}>
                    <img
                      className="px-5 collabrators"
                      src={require(`../../Assets/collabrators/${image}`)}
                      alt=""
                    />
                  </span>
                ))}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
}
