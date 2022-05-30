import React, { useEffect, useState } from 'react';
import './SignUp.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialRegister from '../../Shared/SocialRegister/SocialRegister';
import Loading from '../../Shared/Loading/Loading';
import useToken from '../../../Hooks/useToken';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const [
        createUserWithEmailAndPassword,
        createUser,
        createLoading,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [token] = useToken(createUser);
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    if (createLoading) {
        return <Loading></Loading>
    }

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

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password);
            alert("Successfully User Register and Send Your Email Verify")
            setError('')
            event.target.reset();
        }
        else {
            setError("Password doesn't matched")
        }
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
                <div className="mb-3 text-center">
                    <p>Already have an account?
                        <Link to={'/login'}> Please Login!</Link>
                    </p>
                </div>
                <div className="mb-3 text-center">
                    <p className='text-danger'>{error}</p>
                </div>
                <div className='text-center'>
                    <button type="submit" className="w-75 mx-auto btn btn-primary text-uppercase mb-3">Register</button>
                </div>
                <SocialRegister></SocialRegister>
            </form>
        </section>
    );
};

export default SignUp;