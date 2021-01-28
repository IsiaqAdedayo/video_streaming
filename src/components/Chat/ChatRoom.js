import React, {useState,useRef} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import ChatMessage from './ChatMessage'
import firebase from 'firebase/app';
import 'firebase/firestore';


const ChatRoom = () => {
    
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);

    const [messages] = useCollectionData(query, { idField : 'id' });

    const [formValue, setFormValue] = useState('');


    const sendMessage = async (e) => {
        e.preventDefault();
    
        const { uid, photoURL } = auth.currentUser;
    
        await messagesRef.add({
          text: formValue,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          uid,
          photoURL
        })
    
        setFormValue('');
        dummy.current.scrollIntoView({ behavior: 'smooth' });
      }

    return (
        <>
            <div className="main">
                {messages && messages.map(message => <ChatMessage key={message.id} message={message}/>)}

                <span ref={dummy}></span>
            </div>

            <form className="chat_form" onSubmit={sendMessage}>

                <input value={formValue} onChange={e => setFormValue(e.target.value)}/>

                <button type="submit" disabled={!formValue}><i className="fas fa-paper-plane"></i></button>
            
            </form>
        </>
    )
}

export default ChatRoom;
