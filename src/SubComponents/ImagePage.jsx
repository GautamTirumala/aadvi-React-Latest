import React from "react";
export default function ImagePage(props) {
    return (
        <>
            <div id="header-carousel" class="carousel slide carousel-fade" data-bs-ride="carousel" data-interval='1000'>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="w-100" src={require('../Assets/image/carousel-1.jpg')} alt="Image" />
                        <div class="carousel-caption d-flex flex-column align-items-center justify-content-center">
                            <div class="p-3" style={{ maxWidth: "900px" }}>
                                <h1 class="display-2 text-white mb-md-4 animated zoomIn">{props.title}</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}