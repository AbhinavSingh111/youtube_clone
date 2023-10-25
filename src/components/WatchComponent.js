import React from 'react'
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../redux/appSlice';
import useWatchComponent from '../hooks/useWatchComponent';

const WatchComponent = () => {
  useWatchComponent();
  return (
    <div>WatchComponent</div>
  )
}

export default WatchComponent