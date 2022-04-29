import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useProductId from '../../Hooks/useProductId';

const InventoryUpdate = () => {
    const { id } = useParams();
    const [productId] = useProductId(id);
    const { img, name, price, description } = productId;
    return (
        <section className='container'>
            <article className="card shadow-sm p-3 mb-5 bg-body">
                <img src={img} className="card-img-top" alt="img" />
                <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">${price}</h6>
                    <p className="card-text">{description}</p>
                    <Link to={`/`} className="btn btn-outline-dark px-5 py-2">Delivered</Link>
                </div>
            </article>
        </section>
    );
};

export default InventoryUpdate;