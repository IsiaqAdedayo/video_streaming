import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const SignIn = () => {
    const auth = firebase.auth();
    
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return (
        <div className= "signIn">
           <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button> 
        </div>
    )
}

export default SignIn;
