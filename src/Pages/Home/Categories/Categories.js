import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import Categorie from '../Categorie/Categorie';
import './Categories.css';

const Categories = () => {
    const [products] = useProduct();
    return (
        <section className='categories-section'>
            <article className='categories'>

            </article>
        </section>
    );
};

export default Categories;