import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../Api/axiosPrivate';
import auth from '../../../Firebase/firebase.init';
import useProduct from '../../../Hooks/useProduct';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [getItems, setGetItems] = useState([]);
    const [products, setProducts] = useProduct();
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const getToken = async () => {
            const email = user?.email;
            const url = `https://fathomless-hamlet-80982.herokuapp.com/items?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setGetItems(data)
            }
            catch (error) {
                console.log(error);
                if (error.response.status === 401 || error.response.status === 401) {
                    navigate('/login')
                    signOut(auth)
                }
            }

        }
        getToken();


    }, [user, navigate]);

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
            <h1 className='text-center my-4'>My Order Items</h1>
            <article className='container w-50 mx-auto'>
                {
                    getItems?.map(item => <MyItem
                        key={item._id}
                        item={item}
                        handleToDelete={handleToDelete}
                    ></MyItem>)
                }
            </article>
        </section>
    );
};

export default MyItems;