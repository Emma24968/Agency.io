import React from 'react'
import assets from '../assets/assets'

const Theme = ({theme}) => {
  return (
    <div className='border-primary cursor-pointer rounded text-primary'>
        <img src={theme ==='dark'? assets.moon_icon : assets.moon_icon} alt="moon icon" />
    </div>
  )
}

export default Theme