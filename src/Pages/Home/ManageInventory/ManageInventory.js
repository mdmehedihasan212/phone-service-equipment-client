import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import { MdDeleteForever } from 'react-icons/md';

const ManageInventory = () => {
    const [products, setProducts] = useProduct();

    const handleToDelete = id => {
        // console.log('clicked', id);
        const proceed = window.confirm('Are you sure delete item!')
        if (proceed) {
            const url = `https://fathomless-hamlet-80982.herokuapp.com/product/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const reaming = products?.filter(product => product._id !== id)
                    setProducts(reaming)
                    console.log(data);
                })
        }
    }

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
                                        <MdDeleteForever onClick={() => handleToDelete(product._id)} cursor={'pointer'} color='red' fontSize={'1.8em'} />
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