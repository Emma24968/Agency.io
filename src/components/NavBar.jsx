import React from 'react'
import assets from '../assets/assets'

export const NavBar = ({theme,setTheme}) => {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 sticky'>
        <img src={theme ==='dark' ? assets.logo_dark:assets.logo }className='w-32 sm:w-40'alt='logo' />
    </div>
  )
}
