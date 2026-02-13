import React from 'react'
import assets from './assets/assets'
import { NavBar } from './components/NavBar'

export default function Footer() {
  return (
    <div>
        <div className="">

        <img src={assets.logo} alt="" />
        <p>From strategy to execution we craft digital solutions that move <br /> your business forward</p>
        <NavBar />
        </div>
        <div className="">
            <h3>Subscribe to our newsletter</h3>
            <p>The latest news,article and documentries sent to your inbox weekly.</p>
<input type="text" placeholder='Enter your email' name="" id="" /><button>Subsribe</button>
        </div>
    </div>
  )
}

