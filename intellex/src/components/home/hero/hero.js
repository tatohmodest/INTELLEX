'use client'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {Fragment, useState,useEffect} from 'react'
import { faStar as fasStar, faPeopleGroup as fasPeopleGroup } from '@fortawesome/free-solid-svg-icons'
import ProfessionalSkillsPlatformHero from './animate2'
import Animation from './animation'
import ParticlesBackground from './backAnimation'
import next from 'next'
export default function Hero(){
   const [word, setWord] = useState('')
  
   const list = ['Learning', 'innovative','Professional','Adaptive','Transformative','Collaborative','Empowering'
   ]

   useEffect(()=>{
     let index = 0;
     
     const nextWord = () => { 
      if(index >= list.length) {index = 0}
       
      setWord(list[index])
      index++;
    }
    nextWord()
    const intervalId = setInterval(nextWord, 3000)
    return ()=>{
      clearInterval(intervalId)
    }   },[])



    return (
        <Fragment >
          <Animation >
           {/* <ParticlesBackground  /> */}
            <main className='z-1 grid grid-cols-2 w-full h-96 px-24'>
                <div className=' flex flex-col  justify-center items-center'>
                  <div className=' p-3 text-white '>
                    <span>Start your Learning</span>
                   
                    <h1 className='text-5xl font-bold'>
                    
                    Elevate Your {' '} 
                    <AnimatePresence mode="wait">
                    <motion.span 
                    key={word}
                    initial={{opacity:0, y:20}}
                    animate={{opacity:1, y:0}}

                    transition={{type:'spring', duration:0.3}}
                    exit={{opacity:0, y:-20}}
                     class="text-gradient">
                     
                     {word}
                     
                     </motion.span>
                     </AnimatePresence> Experience
                     
                    </h1>
                   
                    <p className='text-sm my-4'>
                    Discover a world of knowledge with our cutting-edge courses and expert instructors.
                    </p>

                    <button className='border hover:underline bg-intellex-green p-2 mt-2 border-black'>Explore Courses</button>
                  </div>
                </div>


                <div className='relative z-2 w-full max-h-96'>
                <div className='absolute bg-white flex flex-col rounded-sm shadow-md p-1 right-48 top-20 justify-start items-start'>
              <div className='flex justify-center  items-center '><FontAwesomeIcon icon={fasPeopleGroup} className='text-green-300 p-1 border bg-green-100 m-1 rounded-md' /><h1>100+ Students</h1>
              </div>
              <h2 className='text-sm font-light'>500+ members growing community</h2>
                </div>
                
                <div className='absolute w-38  z-10 top-80 left-72 bg-white rounded-sm shadow-md p-1 flex justify-center items-center'>
                   <FontAwesomeIcon icon={fasStar} className='text-green-300 p-1 border bg-green-100 m-1 rounded-md' />5 star Rating
                </div>

                    <Image className='w-full  relative h-full -z-10' width={300 } height={300} src="https://intellex-images.s3.eu-north-1.amazonaws.com/intellex_images+(2)/angela.svg" alt='hero image 1'/>


                
                
                </div>
            </main>  
            </Animation>
          
              
        </Fragment>
    )
}