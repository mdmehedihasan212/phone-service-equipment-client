import React from 'react';
import { useForm } from "react-hook-form";

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `https://fathomless-hamlet-80982.herokuapp.com/product`;
        console.log(url);
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('create user')
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <section className='w-50 mx-auto my-4'>
            <article>
                <form className='d-flex flex-column form-container shadow-sm mb-5 bg-body rounded' onSubmit={handleSubmit(onSubmit)}>
                    <h1 className='text-center'>Add New Item</h1>
                    <label className='mb-2'>Name</label>
                    <input className='mb-2' {...register("Name", { required: true })} />
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