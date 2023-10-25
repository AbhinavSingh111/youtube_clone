import React from 'react';
import SideBar from './SideBar';
import MainContainer from './MainContainer';

const BodyComponent = () => {
  return (
    <div className='flex'>
        <SideBar />
        <MainContainer />
    </div>
  )
}

export default BodyComponent;