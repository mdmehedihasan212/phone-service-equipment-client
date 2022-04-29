import React, { useState } from 'react';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
        createUserError,
    ] = useCreateUserWithEmailAndPassword(auth);

    const handleName = event => {
        setName(event.target.value);
    }
    const handleEmail = event => {
        setEmail(event.target.value);
    }
    const handlePassword = event => {
        setPassword(event.target.value);
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        createUserWithEmailAndPassword(email, password);
        alert('create user')
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className='form-container shadow-sm mb-5 bg-body rounded'>
                <h2 className='text-center text-uppercase mb-3'>Register Please</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputName" className="form-label">Name</label>
                    <input onBlur={handleName} type="text" className="form-control" id="exampleInputName" aria-describedby="nameHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputConfirmPassword1" className="form-label">Confirm Password</label>
                    <input onBlur={handleConfirmPassword} type="password" className="form-control" id="exampleInputConfirmPassword1" required />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className='text-center'>
                    <button type="submit" className="w-75 mx-auto btn btn-primary text-uppercase mb-3">Register</button>
                </div>
            </form>
        </section>
    );
};

export default SignUp;