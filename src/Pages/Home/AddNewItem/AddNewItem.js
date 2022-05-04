import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import auth from '../../../Firebase/firebase.init';
import './AddNewItem.css';

const AddNewItem = () => {
    const [user] = useAuthState(auth);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/order`;
        console.log(url);
        fetch(url, {
            method: "POST",
            headers: {
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Successfully Create New Items')
            })
    };

    return (

        <section className='w-50 mx-auto my-4'>
            <article>
                <form className='d-flex flex-column form-container shadow-sm mb-5 bg-body rounded' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center'>Add New Item</h1>
                    <label className='mb-2'>Email</label>
                    <input className='mb-2' value={user?.email} {...register("email", { required: true })} readOnly />
                    <label className='mb-2'>Name</label>
                    <input className='mb-2' {...register("name", { required: true })} />
                    <label className='mb-2'>Price</label>
                    <input className='mb-2' type="number" {...register("price", { required: true })} />
                    <label className='mb-2'>Description</label>
                    <textarea className='mb-2' {...register("description", { required: true })} />
                    <label className='mb-2'>Img Url</label>
                    <input className='mb-2' {...register("img", { required: true })} />
                    <input className='w-75 mx-auto btn btn-primary text-uppercase my-3' type="submit" />
                </form>
            </article>
        </section>
    );
};

export default AddNewItem;