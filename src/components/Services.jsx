import React from 'react'
import { company_logos } from '../assets/assets'

// import googleLogo from '../assets/google_logo.svg'
// import rakuten from '../assets/assets/rakuten_logo'

export default function Services() {
  return (
    <div>
        <p>Trusted by Leading Companies</p>
        <div>{company_logos.map((logo,index)=>(
          <img src={logo} key={index} alt="" />
        ))}</div>
    </div>
  )
}
