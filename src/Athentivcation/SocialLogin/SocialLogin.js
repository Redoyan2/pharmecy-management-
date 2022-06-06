import React from 'react';
import { GoogleAuthProvider, FacebookAuthProvider,signInWithPopup } from "firebase/auth";
import auth from '../../firebase.init';

const SocialLogin = () => {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider= new FacebookAuthProvider();
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                if (user) {
                    console.log(user.displayName);
                }
            }).catch((error) => {
                const errorMessage = error.message;
                if (error) {
                    console.log(errorMessage);
                }

            });
    }
    const handleFacebookSignIn=()=>{

    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className='btn btn-secondary'>Google Sign in </button>
            <button onClick={handleFacebookSignIn} className='btn btn-secondary'>Facebook Sign in </button>
        </div>
    );
};

export default SocialLogin;