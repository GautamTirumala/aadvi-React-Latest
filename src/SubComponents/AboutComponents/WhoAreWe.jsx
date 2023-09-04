import React from "react";
export default function WhoAreWe() {
  return (
    <>
      <div>
        <div
          class="container-fluid py-5 wow fadeInUp animate__animated animate__fadeInUp"
          data-wow-delay="0.1s"
        >
          <div class="container py-5">
            <div class="row g-5">
              <div class="col-lg-7">
                <div class="section-title position-relative pb-3 mb-3 wow fadeInUp animate__animated animate__fadeInUp">
                  <h5 class="fw-bold text-primary text-uppercase">
                    Why Aadvi ?
                  </h5>
                  <h1 class="mb-0">Choose Excellence, Choose Us</h1>
                </div>
                <p className="wow fadeInUp animate__animated animate__fadeInUp" style={{ textAlign: "justify" }}>
                <p style={{marginBottom:"10px"}}>
                  In the dynamic realm of business, we specialize in crafting
                  tailored solutions that empower clients to outshine
                  competitors and lead in innovation. With unwavering
                  commitment, we've completed many transformative
                  partnerships, exemplifying our dedication to exceptional
                  results and lasting bonds.</p><p style={{marginBottom:"10px"}}> Our IoT and mobile app experts
                  create visually appealing web designs reflecting brand
                  identity, elevating online presence. Custom web development
                  extends reach, boosting visibility and engagement</p> <p style={{marginBottom:"10px"}}> Support
                  thrives beyond project completion—our ethos. Lasting
                  relationships form through ongoing assistance. We ensure
                  unwavering support for sustained success.</p> Leveraging IoT for
                  real-world solutions, revolutionizing apps, captivating web
                  designs—our focus is your triumph. In competition, standing
                  out is vital. With us, embrace proven excellence and
                  innovation. Welcome to a partnership where the ordinary
                  becomes extraordinary.
                </p>
              </div>

              <div class="col-lg-5" style={{ minHeight: "400px" }}>
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 wow  animate__animated animate__zoomIn"
                    data-wow-delay="0.9s"
                    src={require("../../Assets/image/whyChooseAadvi.jpg")}
                    alt="About"
                    style={{ objectFit: "cover",boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",borderRadius: '20px'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
