import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

const MyItems = () => {
    const [getItem, setGetItem] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        const email = user.email;
        const url = `http://localhost:5000/product?email=${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setGetItem(data)
            })

    }, [user]);

    return (
        <div>
            <h1>MyItems: {getItem.length}</h1>
        </div>
    );
};

export default MyItems;