import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import Categorie from '../Categorie/Categorie';
import './Categories.css';

const Categories = () => {
    const [products] = useProduct();
    console.log(products);
    return (
        <section className='categories-section m-4'>
            <article className='categories'>
                <div className="text">
                    <h4 className='text-uppercase'>Scanning Product</h4>
                </div>
            </article>
            <article>
                {/* {
                    products?.map(product => <Categorie
                        key={product._id}
                        product={product}
                    ></Categorie>)
                } */}
            </article>
        </section>
    );
};

export default Categories;