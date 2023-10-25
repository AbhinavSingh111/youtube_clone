import React from 'react'

const ButtonComponent = ({name}) => {
  return (
    <div className=''>
        <button className='px-5 py-2 m-2 rounded-lg box-border bg-gray-300'>{name}</button>
    </div>
  )
}

export default ButtonComponent;