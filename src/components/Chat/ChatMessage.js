import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const ChatMessage = ({message}) => {
    const auth = firebase.auth();
    
    const {text, uid, photoURL} = message;

    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (
        <div className={`message ${messageClass}`}>
            <img className="chat_img" src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt="user"/>
            <p>{text}</p>
            
        </div>
    )
}

export default ChatMessage;
