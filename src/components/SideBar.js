import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addSearchData } from '../redux/searchVideoSlice';

const SideBar = () => {
  const isMenuOpen = useSelector((store)=>store?.app?.isMenuOpen) ;
  const dispatch = useDispatch();
  if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-40'>
      <ul>
        <li><Link onClick={()=> dispatch(addSearchData(null))} to={""}>Home</Link></li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Playlists</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Playlists</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="pt-5 font-bold">Playlists</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  )
}

export default SideBar;