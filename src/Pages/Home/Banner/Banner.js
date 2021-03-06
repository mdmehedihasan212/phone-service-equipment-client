import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <section className='banner text-uppercase'>
            <article className='banner-text'>
                <span>Daily, Weekly, Monthly, or Long Term Rent</span>
                <h1 className='animate__animated animate__fadeInLeft animate__slower'>Warehouse</h1>
                <h2 className='animate__animated animate__fadeInRight animate__slower'>Equipment</h2>
            </article>
        </section>
    );
};

export default Banner;