import React from 'react'
import assets from '../assets/assets'

export default function Category() {
  return (
<div className="flex border bg-white z-50 p-4">
          <div className="border-6 rounded-full border-gray-200 ">
            <img src={assets.ads_icon} alt="" bo />
          </div>
          <div>
            <h5>Advertising</h5>
            <p>We turn bold ideas into digital content that engage.</p>
          </div>
        </div>  )
}
