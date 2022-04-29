import React from 'react';
import { Link } from 'react-router-dom';

const Categorie = ({ product }) => {
    console.log(product);
    const { img, name, price, description } = product;
    return (
        <section>
            <div className="card shadow-sm p-3 mb-5 bg-body">
                <img src={img} className="card-img-top" alt="img" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">${price}</h6>
                    <p className="card-text">{description}</p>
                    <Link to={'/'} className="btn btn-outline-dark px-5 py-2">Go Delivery</Link>
                </div>
            </div>
        </section>
    );
};

export default Categorie;