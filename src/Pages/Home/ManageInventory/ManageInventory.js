import React from 'react';
import useProduct from '../../../Hooks/useProduct';
import { Link } from 'react-router-dom';
import ManageInventoryDetails from '../ManageInventoryDetails/ManageInventoryDetails';

const ManageInventory = () => {
    const [products, setProducts] = useProduct();

    const handleToDelete = id => {
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
            <article className='text-center my-3'>
                <h1 className='text-center my-4'>Manage Inventory</h1>
                <Link to={'/addNewItem'} className="btn btn-outline-dark px-5 py-2">Add New Item</Link>
            </article>
            <article className='container w-50 mx-auto'>
                {
                    products?.map(product =>
                        <ManageInventoryDetails
                            key={product._id}
                            product={product}
                            handleToDelete={handleToDelete}
                        ></ManageInventoryDetails>)
                }
            </article>
        </section>
    );
};

export default ManageInventory;