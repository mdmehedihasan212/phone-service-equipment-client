import React from 'react';
import './Inventory.css';
import useProduct from '../../../Hooks/useProduct';
import Items from '../Items/Items';

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
        </section>
    );
};

export default Inventory;