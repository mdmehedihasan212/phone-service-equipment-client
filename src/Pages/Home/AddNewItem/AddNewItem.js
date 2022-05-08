import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';

const AddNewItem = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://fathomless-hamlet-80982.herokuapp.com/product`;
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
                alert('Successfully Create New Items')
                navigate('/myItems')
            })
    };

    return (
        <section className='mx-auto my-4'>
            <article>
                <form className='form-container d-flex flex-column shadow-sm mb-5 bg-body' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center'>Add New Item</h1>
                    <label className='mb-2'>Email</label>
                    <input className='mb-2 px-1 py-2' value={user?.email} {...register("email", { required: true })} readOnly />
                    <label className='mb-2'>Name</label>
                    <input className='mb-2 px-1 py-2' {...register("name", { required: true })} />
                    <label className='mb-2'>Price</label>
                    <input className='mb-2 px-1 py-2' type="number" {...register("price", { required: true })} />
                    <label className='mb-2'>Description</label>
                    <textarea className='mb-2 px-1 py-2' {...register("description", { required: true })} />
                    <label className='mb-2'>Img Url</label>
                    <input className='mb-2 px-1 py-2' {...register("image", { required: true })} />
                    <input className='w-75 mx-auto btn btn-primary text-uppercase my-3' type="submit" />
                </form>
            </article>
        </section>
    );
};

export default AddNewItem;