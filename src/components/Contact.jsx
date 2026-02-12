import React from 'react'
import assets from '../assets/assets'
import Form from '../Form'

export default function Contact({title,image}) {
  return (
<div className='flex flex-col items-center  gap-6 py-20 px-4 text-center w-full' >
          <h3 className='font-bold text-3xl'>Reach out to us</h3>
          <p>Ready to grow your brand? Let's connect and build something<br />exceptional together. </p>
          <Form />
        </div>  )
}
