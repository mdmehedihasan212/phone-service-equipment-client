import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const MyItem = ({ item, handleToDelete }) => {
    const { _id, image, name, price } = item;
    return (
        <section>
            <div className='product-list shadow bg-body'>
                <img src={image} alt="img" />
                <p className='text-wrap' style={{ width: '10rem' }}>{name}</p>
                <p>{price}</p>
                <p>
                    <MdDeleteForever onClick={() => handleToDelete(_id)} cursor={'pointer'} color='red' fontSize={'1.8em'} />
                </p>
            </div>
        </section>
    );
};

export default MyItem;