'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Instructor() {
   const [show , setShow] = useState(false)
  
  return (
    <div className='px-[67px] mt-5'>
        
        <div className="text-center mb-8">
  <h1 className="text-4xl font-bold mb-2">Meet our Top Instructors</h1>
  <p className="text-gray-600">
    Industry experts shaping tomorrow's leaders.
  </p>
</div>

<div className='grid grid-cols-4 gap-3'>

    <div  className='relative    overflow-hidden' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/max.svg'} width={100} height={200} alt=''/>
      { show && <FontAwesomeIcon icon={faInfo} className='bg-white transition-all ease-in duration-[0.4s]  p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'/>
   }
        <div className='overlay'>
            <h1 className='text-md font-bold'>
        Maximilian Schwarzmüller
        </h1>
        <h2 className='text-xsm text-gray-400'>
        JavaScript, React, Angular, Vue.js
        </h2>
        <h3 className='text-xxsm '>2,000,000+ Students on udemy</h3>
        </div>
        
    </div> 
    <div className='relative  overflow-hidden'>
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/angela.svg'} width={100} height={200} alt=''/>
        <FontAwesomeIcon icon={faInfo} className='bg-white p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'/>
       
        <div className='overlay'>
            <h1 className='text-md font-bold'>
       Dr. Angela Yu
        </h1>
        <h2 className='text-xsm text-gray-400'>
        Web Development, iOS Development
        </h2>
        <h3 className='text-xxsm '>1,000,000+ Students on udemy</h3>
        </div>
        
    </div>
    <div className='relative  overflow-hidden'>
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/zaid.svg'} width={100} height={200} alt=''/>
        <FontAwesomeIcon icon={faInfo} className='bg-white p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'/>
       
        <div className='overlay'>
            <h1 className='text-md font-bold'>
            Zaid Sabih
        </h1>
        <h2 className='text-xsm text-gray-400'>
        Ethical Hacking, Network Security, Python for Ethical Hacking
        </h2>
        <h3 className='text-xxsm '>1,000,000+ Students on udemy</h3>
        </div>
        
    </div>
    <div className='relative overflow-hidden'>
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/Anton.svg'} width={100} height={200} alt=''/>
        <FontAwesomeIcon icon={faInfo} className='bg-white p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'/>
       
        <div className='overlay'>
            <h1 className='text-md font-bold'>
            Anton Voroniuk
        </h1>
        <h2 className='text-xsm text-gray-400'>
        Business Strategy, Entrepreneurship, Digital Marketing
        </h2>
        <h3 className='text-xxsm '>500,000+ Students on udemy</h3>
        </div>
        
    </div>
</div>

    </div>
  )
}

export default Instructor
