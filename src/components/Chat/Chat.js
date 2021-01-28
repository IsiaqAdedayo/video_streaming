import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
import './chat.css'

import { useAuthState } from 'react-firebase-hooks/auth';
import SignOut from './SignOut';
import ChatRoom from './ChatRoom';
import SignIn from './SignIn';


firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_API_KEY}`,
    authDomain: `${process.env.REACT_APP_AUTHDOMAIN}`,
    projectId: `${process.env.REACT_APP_PROJECTID}`,
    storageBucket: `${process.env.REACT_APP_STORAGEBUCKET}`,
    messagingSenderId: `${process.env.REACT_APP_MESSAGINGSENDERID}`,
    appId: `${process.env.REACT_APP_APPID}`,
    measurementId: `${process.env.REACT_APP_MEASUREMENTID}`
})


const Chat = () => {
    const auth = firebase.auth();
    
    const [user] = useAuthState(auth);


    let targetA = document.querySelector(".chat");
    let targetB = document.querySelector(".chatHeaderClose");
    const handleClick = () => {
        if (targetA.style.display === "block") {
            targetA.style.display  = "none";
            targetB.style.display  = "block";
            targetB.style.display  = "flex";
        }else{
            targetA.style.display  = "block";
            targetB.style.display  = "none";
        }
    }

    return (
        <div >
            <div className="chat" >
                <header className="chatHeader" onClick={handleClick}>
                    <i className="fas fa-comment-alt" ></i>
                    <SignOut />
                </header>

                    <section>
                        {user ? <ChatRoom /> : <SignIn />}
                    </section>
            </div>
            <div  >
                <header className="chatHeaderClose" onClick={handleClick}>
                    <i className="fas fa-comment-alt"></i>
                    <p>CHAT</p>
                </header>
            </div>
        </div>
    )
}

export default Chat;
