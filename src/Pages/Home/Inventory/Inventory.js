import React from 'react';
import './Inventory.css';
import { Link } from 'react-router-dom';
import banner from '../../../Assets/banner/banner-3.jpg';

const Inventory = () => {
    return (
        <section className='container'>
            <article className='text-center mt-5'>
                <span>FEATURED OFFERS</span>
                <h1>SPECIAL DEALS</h1>
            </article>
            <article>
                <div class="row row-cols-1 row-cols-md-3 g-4 mt-4">
                    <div class="card shadow-sm p-3 mb-5 bg-body">
                        <img src={banner} class="card-img-top" alt="img" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={'/'} class="btn btn-outline-dark px-5 py-2">Go Delivery</Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Inventory;