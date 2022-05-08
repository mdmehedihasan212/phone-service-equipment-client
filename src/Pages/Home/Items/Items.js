import React from 'react';
import { Link } from 'react-router-dom';
import './Items.css';

const Items = ({ product }) => {
    const { _id, image, name, description, price, quantity, supplier } = product;

    return (
        <section>
            <div className="position-relative product-container" style={{ height: '500px' }}>
                <img src={image} className="card-img-top product-img" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Quantity: {quantity}</h6>
                    <h6 className="card-title">Price: {price}/mo</h6>
                    <h6 className="card-title">Supplier: {supplier}</h6>
                    <p className="card-text">{description}</p>
                    <Link to={`/inventoryUpdate/${_id}`} className="btn btn-outline-dark px-5 py-2 position-absolute bottom-0 start-50 translate-middle-x">Update</Link>
                </div>
            </div>
        </section>
    );
};

export default Items;