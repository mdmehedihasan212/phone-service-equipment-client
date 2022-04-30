import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import { MdDeleteForever } from 'react-icons/md';

const ManageInventory = () => {
    const [products] = useProduct();

    return (
        <section>
            <h1 className='text-center my-4'>Manage Inventory</h1>
            <article className='container w-50 mx-auto'>
                {
                    products?.map(product => <>
                        <table className='table text-center border border-1'>
                            <tbody>
                                <tr>
                                    <td className='py-4'>{product.name}</td>
                                    <td className='py-4'>${product.price}</td>
                                    <td className='py-4'>
                                        <MdDeleteForever color='red' fontSize={'1.5em'} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </>)
                }
            </article>
        </section>
    );
};

export default ManageInventory;