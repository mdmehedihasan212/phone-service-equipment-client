import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
const ManageInventoryDetails = ({ product, handleToDelete }) => {
    const { _id, image, name, price } = product;

    return (
        <tr className='text-center'>
            <td>
                <img src={image} alt="" style={{ width: '100px' }} />
            </td>
            <td>{name}</td>
            <td>{price}</td>
            <td>
                <p>
                    <MdDeleteForever onClick={() => handleToDelete(_id)} cursor={'pointer'} color='red' fontSize={'1.8em'} />
                </p>
            </td>
        </tr>
    );
};

export default ManageInventoryDetails;