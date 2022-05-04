import React from 'react';
import './Inventory.css';
import useProduct from '../../../Hooks/useProduct';
import Items from '../Items/Items';
import { Link } from 'react-router-dom';

const Inventory = () => {
    const [products] = useProduct();

    return (
        <section className='container text-uppercase'>
            <h1 className='text-center mt-5'>Inventory</h1>
            <article className="row row-cols-1 row-cols-md-3 g-5 mt-4">
                {
                    products?.slice(0, 6).map(product => <Items
                        key={product._id}
                        product={product}
                    ></Items>)
                }
            </article>
            <article className='text-center mt-5 mb-5'>
                <Link to={'/manageInventory'} className="btn btn-outline-dark px-5 py-2">Manage Inventories</Link>
            </article>
        </section>
    );
};

export default Inventory;