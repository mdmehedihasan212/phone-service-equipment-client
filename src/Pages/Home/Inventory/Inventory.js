import React from 'react';
import './Inventory.css';
import useProduct from '../../../Hooks/useProduct';
import Items from '../Items/Items';

const Inventory = () => {
    const [products] = useProduct();

    return (
        <section className='container'>
            <article className='text-center mt-5'>
                <h1>SPECIAL DEALS</h1>
            </article>
            <article className="row row-cols-1 row-cols-md-3 g-5 mt-4">
                {
                    products?.map(product => <Items
                        key={product._id}
                        product={product}
                    ></Items>)
                }
            </article>
        </section>
    );
};

export default Inventory;