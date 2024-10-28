'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { easeIn, easeInOut, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Instructor() {
   const [show , setShow] = useState(false)
   const [show1 , setShow1] = useState(false)
   const [show2 , setShow2] = useState(false)
   const [show3 , setShow3] = useState(false)
  
  return (
    <div className='px-[67px] mt-20'>
        
        <div className="text-center mb-8">
  <h1 className="text-4xl text-gray-800 font-bold mb-2">Meet our Top <span className='text-gradient'>Instructors</span> </h1>
  <p className="text-gray-600">
    Industry experts shaping tomorrow&lsquos; leaders.
  </p>
</div>

<div className='grid grid-cols-4 gap-3'>

    <div  className='relative    overflow-hidden' onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)}>
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/max.svg'} width={100} height={200} alt=''/>
      { show && 
      
      <motion.div 
      transtion={{easeInOut, type:'spring'}} 
      initial={{opacity:0, rotateY:-180}}
      animate={{opacity:1, rotateY:0}}
      className='bg-white transition-all ease-in duration-[0.4s] flex justify-center items-center  p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'
    >
              <FontAwesomeIcon
      icon={faInfo}  />
   
        </motion.div>
        
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
    <div  className='relative    overflow-hidden' onMouseEnter={()=>setShow1(true)} onMouseLeave={()=>setShow1(false)}>
    
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/angela.svg'} width={100} height={200} alt=''/>
        { show1 && 
      
      <motion.div 
      transtion={{easeInOut, type:'spring'}} 
      initial={{opacity:0, rotateY:-180}}
      animate={{opacity:1, rotateY:0}}
      className='bg-white transition-all ease-in duration-[0.4s] flex justify-center items-center  p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'
    >
              <FontAwesomeIcon
      icon={faInfo}  />
   
        </motion.div>
        
  }
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
    <div  className='relative   overflow-hidden' onMouseEnter={()=>setShow2(true)} onMouseLeave={()=>setShow2(false)}>
    
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/zaid.svg'} width={100} height={200} alt=''/>
        { show2 && 
      
      <motion.div 
      transtion={{easeInOut, type:'spring'}} 
      initial={{opacity:0, rotateY:-180}}
      animate={{opacity:1, rotateY:0}}
      className='bg-white transition-all ease-in duration-[0.4s] flex justify-center items-center  p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'
    >
              <FontAwesomeIcon
      icon={faInfo}  />
   
        </motion.div>
        
  }
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
    <div  className='relative    overflow-hidden' onMouseEnter={()=>setShow3(true)} onMouseLeave={()=>setShow3(false)}>
    
        <Image className='w-full h-full object-cover' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/Anton.svg'} width={100} height={200} alt=''/>
        { show3 && 
      
      <motion.div 
      transtion={{easeInOut, type:'spring'}} 
      initial={{opacity:0, rotateY:-180}}
      animate={{opacity:1, rotateY:0}}
      className='bg-white transition-all ease-in duration-[0.4s] flex justify-center items-center  p-1 rounded-full w-[20px]  h-[20px] absolute top-0 right-0 m-3'
    >
              <FontAwesomeIcon
      icon={faInfo}  />
   
        </motion.div>
        
  }
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
