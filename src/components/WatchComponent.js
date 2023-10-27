import React from 'react'
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../redux/appSlice';
import useWatchComponent from '../hooks/useWatchComponent';
import {useSearchParams} from 'react-router-dom';
import {YT_PLAYER} from '../utilities/constants';

const WatchComponent = () => {
  useWatchComponent();
  const [searchParams , setSearchParams] = useSearchParams();

  return (
    <div>
      <iframe width="560" height="315" src={YT_PLAYER+searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
  )
}

export default WatchComponent