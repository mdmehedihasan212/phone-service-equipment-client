import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import SocialRegister from '../../Shared/SocialRegister/SocialRegister';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const LogIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate();
    const location = useLocation();

    const [user, loading] = useAuthState(auth);
    const [
        signInWithEmailAndPassword,
        signUser,
        signLoading,
        signError,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

    if (loading || signLoading) {
        return <Loading></Loading>
    }

    const from = location.state?.from?.pathname || "/";

    if (user) {

        fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({
                email: user?.email
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("accessToken", data.accessToken)
                navigate(from, { replace: true });
            })


    }

    const handleEmail = event => {
        setEmail(event.target.value);
    }

    const handlePassword = event => {
        setPassword(event.target.value);
    }

    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    return (
        <section>
            <form onSubmit={handleSubmit} className='form-container shadow-sm mb-5 bg-body rounded'>
                <h2 className='text-center text-uppercase mb-3'>Login</h2>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input onBlur={handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input onBlur={handlePassword} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div>
                    <p
                        onClick={async () => {
                            if (email) {
                                await sendPasswordResetEmail(email)
                                toast('Send Password Reset Email')
                            }
                        }}
                        style={{ cursor: 'pointer' }} className='link-primary mb-0'>Forget password?</p>
                    <p>I have no account!
                        <Link className='text-decoration-none mx-2' to={'/signup'}>Please register</Link>
                    </p>
                </div>
                <div className='text-center'>
                    <button type="submit" className="w-75 mx-auto btn btn-primary text-uppercase mb-3">Login</button>
                </div>
                <SocialRegister></SocialRegister>
            </form>
        </section>
    );
};

export default LogIn;