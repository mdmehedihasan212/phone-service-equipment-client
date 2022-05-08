import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import './ManageInventoryDetails.css';
const ManageInventoryDetails = ({ product, handleToDelete }) => {
    const { _id, image, name, price } = product;
    return (
        <section>
            <div className='product-list shadow bg-body'>
                <img src={image} alt="" />
                <p className='text-wrap' style={{ width: '10rem' }}>{name}</p>
                <p>{price}</p>
                <p>
                    <MdDeleteForever onClick={() => handleToDelete(_id)} cursor={'pointer'} color='red' fontSize={'1.8em'} />
                </p>
            </div>
        </section>
    );
};

export default ManageInventoryDetails;