import React from 'react'
import ChatMessage from './ChatMessage';
import { useEffect } from 'react';

const ChatContainer = () => {
    // api polling
    useEffect(()=>{
        const interval  = setInterval(()=>{
            console.log("api polling");
        },2000);

        // removing setinterval (garabage collection)

        return ()=> clearInterval(interval);
    },[]);
  return (
    <div className='w-[405px] h-[600px] ml-2 p-2 border-black bg-slate-100 rounded-lg overflow-y-auto scroll-my-1'>
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />
        <ChatMessage name="Abhinav" message="hasadanamuriva na mungiwara" />

    </div>
  )
}

export default ChatContainer;