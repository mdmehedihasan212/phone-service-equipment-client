import React from 'react';
import './Categories.css';
import icon1 from '../../../Assets/categories icon/air blower.png';
import icon2 from '../../../Assets/categories icon/battery booster.webp';
import icon3 from '../../../Assets/categories icon/multimeter.webp';
import icon4 from '../../../Assets/categories icon/smoke absorber.webp';
import { Link } from 'react-router-dom';

const Categories = () => {
    return (
        <section className='categories'>
            <h1 className='text-center text-white my-5'>Categories</h1>
            <article className='container'>
                <div className="row row-cols-1 row-cols-md-4">
                    <div className="col main-card">
                        <div className="card h-100">
                            <img src={icon1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-uppercase">Hot Air Blower</h5>
                                <p className="card-text">A hot air blower is also called SMD (Surface Mount Device) rework station and SMD repair system.</p>
                            </div>
                            <Link to={'/manageInventory'}>Learn More</Link>
                        </div>
                    </div>
                    <div className="col main-card">
                        <div className="card h-100">
                            <img src={icon2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Battery Booster</h5>
                                <p className="card-text">A battery booster is used to boost the power of battery of a mobile phone.</p>
                            </div>
                            <Link to={'/manageInventory'}>Learn More</Link>
                        </div>
                    </div>
                    <div className="col main-card">
                        <div className="card h-100">
                            <img src={icon3} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Multimeter</h5>
                                <p className="card-text">A multimeter can be analog or digitalMostly a digital multimeter is used to find faults.</p>
                            </div>
                            <Link to={'/manageInventory'}>Learn More</Link>
                        </div>
                    </div>
                    <div className="col main-card">
                        <div className="card h-100">
                            <img src={icon4} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Smoke Absorber</h5>
                                <p className="card-text">This is like an exhaust fan that helps to filter smoke that comes out while soldering and Desoldering.</p>
                            </div>
                            <Link to={'/manageInventory'}>Learn More</Link>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Categories;