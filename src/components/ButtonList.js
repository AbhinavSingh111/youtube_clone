import React from 'react'
import ButtonComponent from './ButtonComponent';

const ButtonList = () => {
  const youtubeCategories = ["Vlogs", "Cooking", "Tech", "DIY", "Fitness", "Comedy", "Education", "Music", "Fashion", "Gaming", "Pets", "Science"];

  return (
    <div className='inline-flex overflow-hidden'>
      {youtubeCategories.map((category)=><ButtonComponent key={category} name={category} />)}
    </div>
  )
}

export default ButtonList;