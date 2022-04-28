import React from 'react';
import banner1 from '../../../Assets/banner/banner-1.webp';
import banner2 from '../../../Assets/banner/banner-2.webp';
import banner3 from '../../../Assets/banner/banner-3.jpg';

const Banner = () => {
    return (
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src={banner1} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={banner2} class="d-block w-100" alt="..." />
                </div>
                <div class="carousel-item">
                    <img src={banner3} class="d-block w-100" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Banner;