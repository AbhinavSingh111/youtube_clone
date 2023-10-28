import React from 'react'
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {addChats} from '../redux/chatSlice';
import { v4 as uuidv4 } from 'uuid';
import {getRandomName, getRandomMessage} from '../utilities/helperComments';

const ChatContainer = () => {
    const dispatch = useDispatch();
    const ChatMessages = useSelector((store)=>store.chat.messages);
    // api polling
    useEffect(()=>{
        const interval  = setInterval(()=>{
            console.log("api polling");
            dispatch(addChats({name: getRandomName() , message: getRandomMessage(), }));
        },500);

        // removing setinterval (garabage collection)

        return ()=> clearInterval(interval);
    },[]);
  return (
    <div className='w-[405px] h-[600px] ml-2 p-2 border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {ChatMessages.map((m)=>(<ChatMessage key={uuidv4()} name={m.name} message={m.message} />)) }
        

    </div>
  )
}

export default ChatContainer;