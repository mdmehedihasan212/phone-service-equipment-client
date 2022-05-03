import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductId from '../../Hooks/useProductId';

const InventoryUpdate = ({ cart }) => {
    const { id } = useParams();
    const [productId] = useProductId(id);
    const { img, name, price, description } = productId || {};

    return (
        <section className='container'>
            <h1>Quantity: </h1>
            <form>
                <input type="number" name="" id="" />
            </form>
            <Link to={`/`} className="btn btn-outline-dark px-5 py-2">Delivered</Link>
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">${price}</h6>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </section>
    );
};

export default InventoryUpdate;