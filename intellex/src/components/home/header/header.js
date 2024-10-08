'use client'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as fasHeart} from '@fortawesome/free-regular-svg-icons';
import {faShoppingCart as fasCart, faShareNodes} from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
function Header() {
  return (
     <header className="flex text-[12px] flex-col bg-gray-800 w-full  top-0 left-0 m-0 justify-start p-4 shadow-md overflow-hidden ">
        
        <div className="flex justify-between items-center mb-3  gap-4 mx-16">

        <div >
           <Image className='object-cover scale-125 h-7' src={"https://intellex-images.s3.eu-north-1.amazonaws.com/logos/intellex.svg "} width={100} height={20} alt="intellex logo" />
           
        </div>
        <div className='flex border rounded-3xl p-1'>
        <button className='flex justify-center p-[5px] border-gray-300 border-r-[1px] items-center gap-2 ' >
       
       <Image 
         src="https://intellex-images.s3.eu-north-1.amazonaws.com/icons/node.svg"
         height={20}
         width={20}
          alt=''
         />
        All Categories
        <div>
        <Image 
         src="https://intellex-images.s3.eu-north-1.amazonaws.com/icons/dropdownwhite.svg"
         height={10}
         width={10}
          alt=''
         />
         </div>
       </button >
            <input className='p-2 bg-gray-800 focus:outline-none w-[500px] focus:border-transparent border-none pl-10' type="search" name='search' placeholder='search anything...'/>
         <button className='flex justify-center items-center gap-2 bg-intellex-green p-1 rounded-3xl'>
        <Image 
         src="https://intellex-images.s3.eu-north-1.amazonaws.com/Untitled+design+(11)/earch+(1).svg"
         height={20}
         width={20}
          alt=''
         />
         Search
        
     
         </button>
         </div>


         <div className='flex justify-center items-center'>
            <button className='ml-2 bg-white text-black   rounded-3xl p-2  hover:text-green-900  transition-all ease-in duration-300'>Sign In</button>
            <button className='ml-3 text-white font-bold bg-black rounded-3xl p-2 hover:bg-blue-700 border  transition-all ease-in duration-300'>Get Started</button>
         </div>

        </div>
        
        
        
        
        
        
       <div className='flex gap-2 justify-between items-center  mx-16 '>
        <button className='flex justify-center p-[5px] items-center gap-2 rounded-[17px] border border-slate-600 ' >
       
        <Image 
          src="https://intellex-images.s3.eu-north-1.amazonaws.com/icons/node.svg"
          height={20}
          width={20}
           alt=''
          />
         All Categories
         <div>
         <Image 
          src="https://intellex-images.s3.eu-north-1.amazonaws.com/icons/dropdownwhite.svg"
          height={10}
          width={10}
           alt=''
          />
          </div>
        </button>
        <nav>
            <ul className='flex cursor-pointer '>
                <li className='ml-4 hover:text-green-800'>Explore</li>
                <li className='ml-4 hover:text-green-800'>Courses</li>
                <li className='ml-4 hover:text-green-800'>Resourses </li><sup className=' border border-black-300 text-gradient bg-purple-300 h-3 p-1  flex justify-center items-center text-center'>whats new</sup>
                <li className='ml-4 hover:text-green-800'>Community</li>
            </ul>
        </nav>

        <div className='flex gap-3 '>
            <span className='ml-2'>EN</span>
            <span className='ml-2 relative'>
            
            <Image 
          src="https://intellex-images.s3.eu-north-1.amazonaws.com/icons/heartwhite.svg "
          height={20}
          width={20}
           alt=''
          />
          <span className="absolute text-white bg-intellex-accent rounded-full text-center scale-75 bottom-3 left-2 p-[1px] w-[20px] h-[20px]">0</span>
         
            </span>
            <span className="relative">
          <Image 
          src="https://intellex-images.s3.eu-north-1.amazonaws.com/icons/cartwhite.svg"
          height={20}
          width={20}
           alt=''
          />
           <span className="absolute text-white bg-intellex-accent rounded-full text-center scale-75 bottom-3 left-2 p-[1px] w-[20px] h-[20px]">0</span>
          </span>
         

         </div>

         </div>
     </header>
  )
}

export default Header;