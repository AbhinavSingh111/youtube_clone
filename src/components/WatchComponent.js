import React from 'react'
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../redux/appSlice';
import useWatchComponent from '../hooks/useWatchComponent';
import {useSearchParams} from 'react-router-dom';
import {YT_PLAYER} from '../utilities/constants';
import CommentContainer from './CommentContainer';
import ChatContainer from './ChatContainer';

const WatchComponent = () => {
  useWatchComponent();
  const [searchParams , setSearchParams] = useSearchParams();

  return (
    <div className='flex flex-col p-5 '>
      <div className='flex w-full'>
        <div>
          <iframe width="1000" height="600" src={YT_PLAYER+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className='w-full'>
          <ChatContainer />
        </div>
      </div>
      <div className='w-[1025px]'>
        <CommentContainer />
      </div>
    </div>
  )
}

export default WatchComponent