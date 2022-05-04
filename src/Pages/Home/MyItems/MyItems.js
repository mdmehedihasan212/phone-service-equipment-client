import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const MyItems = () => {
    const [getItem, setGetItem] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        const getToken = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setGetItem(data)
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

    return (
        <div>
            <h1>MyItems: {getItem.length}</h1>
        </div>
    );
};

export default MyItems;