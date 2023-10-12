import React from 'react'
function Carousel123() {
  return (
    <div>
      <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="3000" data-bs-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src={require('../Assets/image/carousel-1.jpg') } alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{maxWidth: "900px"}}>
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solutions</h1>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src={require('../Assets/image/meeting-1.jpg') } alt="Image"/>
                    <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div class="p-3" style={{maxWidth: "900px"}}>
                            <h1 class="display-1 text-white mb-md-4 animated zoomIn">Creative & Innovative Digital Solutions</h1>
                            
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    
  )
}

export default Carousel123