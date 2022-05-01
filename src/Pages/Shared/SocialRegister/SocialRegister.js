import React from 'react';
import './SocialRegister.css';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../Firebase/firebase.init';

const SocialRegister = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    return (
        <section>
            <button onClick={() => signInWithGoogle()} className='google-btn w-100'>
                <FcGoogle className='google-icon me-2' />
                Continue With Google
            </button>
        </section>
    );
};

export default SocialRegister;