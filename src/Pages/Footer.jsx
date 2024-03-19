import React from 'react'
import Logo from '../../src/assets/img/logo.png'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='w-full flex items-center justify-between border-t-2 border-gray-300'>
    <div className='flex  items-center justify-center gap-3 py-3'>
        <img src={Logo} alt="footer-log-here" className='w-8 h-auto object-contain' />
        <p>Expressresume</p>
    </div>
    <div className='flex items-center justify-center gap-6'>
    <Link to='/' className='text-blue-700 text-sm'>Home</Link>
    <Link to='/' className='text-blue-700 text-sm'>Contact</Link>
    <Link to='/' className='text-blue-700 text-sm whitespace-nowrap'>Privacy Policy</Link>



    </div>
      
    </div>
  )
}

export default Footer
