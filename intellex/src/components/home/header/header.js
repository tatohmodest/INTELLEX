'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart} from '@fortawesome/free-solid-svg-icons';
import {faShoppingCart as fasCart} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
function Header() {
  return (
     <header className="flex bg-white w-full sticky top-0 left-0 m-0 justify-between items-center p-4 shadow-md">
        <div >
           <Image className='object-cover scale-125 h-7' src={"https://intellex-images.s3.eu-north-1.amazonaws.com/logos/1.svg "} width={100} height={20} alt="intellex logo" />
           
        </div>
         <div >
            <input className='p-2  focus:outline-none focus:border border rounded-3xl pl-10' type="search" name='search' placeholder='search anything...'/>
         </div>
        <nav>
            <ul className='flex '>
                <li className='ml-4 hover:text-green-800'>Explore</li>
                <li className='ml-4 hover:text-green-800'>Courses</li>
                <li className='ml-4 hover:text-green-800'>Resourses </li><sup className=' border border-black-300 text-gradient bg-purple-300 h-3 p-1  flex justify-center items-center text-center'>whats new</sup>
                <li className='ml-4 hover:text-green-800'>Community</li>
            </ul>
        </nav>

        <div className='flex'>
            <span className='ml-2'>EN</span>
            <span className='ml-2 disp'>< FontAwesomeIcon  icon={ fasHeart} className='ml-4' /> 
           <FontAwesomeIcon icon={fasCart} className='mx-3' /></span>

         </div>

         <div className='flex justify-center items-center'>
            <button className='ml-2 border-none  rounded-3xl p-2  hover:text-green-900 underline  transition-all ease-in duration-300'>Sign In</button>
            <button className='ml-3 bg-intellex-blue rounded-3xl p-2 hover:bg-blue-700 border  transition-all ease-in duration-300'>Get Started</button>
         </div>
     </header>
  )
}

export default Header;