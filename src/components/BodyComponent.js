import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';
import { Outlet } from 'react-router-dom';

const BodyComponent = () => {
  return (
    <div className='flex'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default BodyComponent;