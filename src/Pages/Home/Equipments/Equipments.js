import React from 'react';
import './Equipments.css';

const Equipments = () => {
    return (
        <section className='equipments-section m-4'>
            <article>
                {/* {
                    products?.map(product => <Categorie
                        key={product._id}
                        product={product}
                    ></Categorie>)
                } */}
            </article>
            <article className='equipments'>
                <div className="equipments-text">
                    <h3 className='text-uppercase fw-bolder'>Powerbank</h3>
                </div>
            </article>
        </section>
    );
};

export default Equipments;