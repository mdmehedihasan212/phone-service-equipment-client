import React, { useEffect } from 'react';
import './SocialRegister.css';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../Hooks/useToken';
import Loading from '../Loading/Loading';

const SocialRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [signInWithGoogle, user, loading] = useSignInWithGoogle(auth);
    const [token] = useToken(user);

    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, navigate, from])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <section>
            <article className='d-flex'>
                <div className='border-top w-50 mt-3'>

                </div>
                <p className='mx-2'>or</p>
                <div className='border-top w-50 mt-3'>

                </div>
            </article>
            <button onClick={() => signInWithGoogle()} className='google-btn w-100'>
                <FcGoogle className='google-icon me-2' />
                Continue With Google
            </button>
        </section>
    );
};

export default SocialRegister;