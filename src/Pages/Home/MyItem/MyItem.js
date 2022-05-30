import React from 'react';
import { MdDeleteForever } from 'react-icons/md';

const MyItem = ({ item, handleToDelete }) => {
    const { _id, image, name, price } = item;
    return (
        <tr className='text-center'>
            <td>
                <img src={image} alt="" style={{ width: '90px' }} />
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

export default MyItem;