import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductId from '../../Hooks/useProductId';

const InventoryUpdate = () => {
    const { id } = useParams();
    const [productId] = useProductId(id);
    const { image, name, description, price, quantity, supplier } = productId || {};

    return (
        <section className='container text-uppercase'>
            <article className="position-relative mx-auto my-5 shadow mb-5 bg-body" style={{ width: '400px', height: '570px' }}>
                <img src={image} className="card-img-top p-2" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Quantity: {quantity}</h6>
                    <h6 className="card-title">Price: {price}/mo</h6>
                    <h6 className="card-title">Supplier: {supplier}</h6>
                    <p className="card-text">{description}</p>
                    <button className="btn btn-outline-dark px-5 py-2 position-absolute bottom-0 start-50 translate-middle-x">Delivered</button>
                </div>
            </article>
            <article className='text-center mt-5 mb-5'>
                <Link to={'/manageInventory'} className="btn btn-outline-dark px-5 py-2">Manage Inventories</Link>
            </article>
        </section>
    );
};

export default InventoryUpdate;