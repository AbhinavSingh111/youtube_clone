import React from 'react'
import {USER_LOGO} from '../utilities/constants';
const ChatMessage = ({name , message}) => {
  return (
    <div className='flex items-center shadow-sm hover:bg-slate-200'>
        <img className="h-8 " src={USER_LOGO} alt="user" />
        <span className='font-semibold p-2'>{name}{" "}</span>
        <span className='font-light p-2'>{message}</span>
    </div>
  )
}

export default ChatMessage;