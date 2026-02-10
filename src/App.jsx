import React, { useState } from 'react'
import { NavBar } from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import Portfolio from './components/Portfolio'

const App = () => {
  const [theme,setTheme]=useState('light')
  return (
    <div className='bg-white dark:bg-black relative'>
      <NavBar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Services />
      <Portfolio />
    </div>
  )
}

export default App