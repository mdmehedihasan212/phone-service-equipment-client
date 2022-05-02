import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../Assets/404 img/404 img.webp';

const NotFound = () => {
    return (
        <section>
            <article>
                <img className='card-img mb-2' src={img} alt="404 img" />
            </article>
            <article className='text-center mb-5'>
                <Link to={'/'} className="btn btn-outline-dark px-5 py-2">Go Home</Link>
            </article>
        </section>
    );
};

export default NotFound;