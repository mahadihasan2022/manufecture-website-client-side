import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import './socialLogin.css';
import Loading from '../../Component/Loading/Loading';



const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // console.log(user?.user?.email);
    // console.log(user?.user?.displayName);
    //  console.log(user?.user?.photoURL);
    //  http://localhost:5000/
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
   
    const navigate = useNavigate();
    
    let errorElement;

    if(loading || loading1){
        <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate('/Home');
    }
    return (
        <div>
             <div>
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn-google w-40 h-12'>
                    Googlea
                </button>
            </div>
        </div>
        </div>
    );
};

export default SocialLogin;