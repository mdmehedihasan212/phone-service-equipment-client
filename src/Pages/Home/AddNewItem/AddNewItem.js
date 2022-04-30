import React from 'react';
import { useForm } from "react-hook-form";

const AddNewItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section className='w-50 mx-auto my-4'>
            <h1 className='text-center'>AddNewItem</h1>
            <article>
                <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2' {...register("firstName", { required: true })} />
                    <input className='mb-2' {...register("lastName", { required: true })} />
                    <input className='mb-2' type="number" {...register("age", { min: 18, max: 99 })} />
                    <input className='w-25 mx-auto' type="submit" />
                </form>
            </article>
        </section>
    );
};

export default AddNewItem;