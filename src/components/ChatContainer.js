import React, { useRef, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addChats} from '../redux/chatSlice';
import { v4 as uuidv4 } from 'uuid';
import {getRandomName, getRandomMessage} from '../utilities/helperComments';

const ChatContainer = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store)=>store.chat.messages);
    const [comment , setComment] = useState(null);
    const inputRef = useRef(null);
    // api polling
    useEffect(()=>{
        const interval  = setInterval(()=>{
            console.log("api polling");
            dispatch(addChats({name: getRandomName() , message: getRandomMessage(), }));
        },2000);

        // removing setinterval (garabage collection)

        return ()=> clearInterval(interval);
    },[]);

    const handleCommentSubmit = ()=>{
        if (comment&& comment.length > 0) {
        setComment(inputRef.current.value);
        dispatch(addChats({name:"Abhinav" , message:comment, }));
        setComment('');
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            // Prevent the default Enter key behavior (form submission)
            e.preventDefault();
      
            // Call the button click handler
            handleCommentSubmit();
          }
    }

  return (
    <>
    <div className='w-[405px] h-[550px] ml-2 p-2 border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
            {ChatMessages.map((m)=>(<ChatMessage key={uuidv4()} name={m.name} message={m.message} />)) }
        </div>
    </div>
    <div className=''>
        <input className='p-2 m-2 w-80 h-[50px] border-black bg-slate-100 rounded-lg hover:bg-slate-200'value={comment} onChange={(e)=>{setComment(e.target.value)}} onKeyDown={handleKeyPress} ref={inputRef} type='text' placeholder='Comments...'/>
        <button className='p-2 cursor-pointer w-20 h-[50px] bg-green-300 hover:bg-green-400 font-medium rounded-lg' onClick={handleCommentSubmit}>Send</button>
    </div>
    </>
  )
}

export default ChatContainer;