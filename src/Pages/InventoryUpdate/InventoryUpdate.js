import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryUpdate = () => {
    const { id } = useParams();
    const [productId, setProductId] = useState();
    const { image, description, name, price, supplier } = productId || {};
    const [delivered, setDelivered] = useState(50);
    console.log(delivered);

    useEffect(() => {
        const url = `https://fathomless-hamlet-80982.herokuapp.com/product/${id}`;
        fetch(url, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setProductId(data))
    }, [id])

    const handleToDelivered = () => {
        if (delivered > 0) {
            setDelivered(delivered - 1);
        }
    }

    return (
        <section className='container text-uppercase'>
            <article className="position-relative mx-auto my-5 shadow mb-5 bg-body" style={{ width: '400px', height: '570px' }}>
                <img src={image} className="card-img-top p-2" alt="img" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">Quantity: {delivered}</h6>
                    <h6 className="card-title">Price: {price}/mo</h6>
                    <h6 className="card-title">Supplier: {supplier}</h6>
                    <p className="card-text"><small>{description}</small></p>
                    <button onClick={handleToDelivered} className="btn btn-outline-dark px-5 py-2 mb-4 position-absolute bottom-0 start-50 translate-middle-x">Delivered</button>
                </div>
            </article>
            <article className='text-center mt-5 mb-5'>
                <Link to={'/manageInventory'} className="btn btn-outline-dark px-5 py-2">Manage Inventories</Link>
            </article>
        </section>
    );
};

export default InventoryUpdate;