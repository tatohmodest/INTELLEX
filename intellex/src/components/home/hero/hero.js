 'use client'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {Fragment, useState,useEffect} from 'react'
import { faStar as fasStar, faPeopleGroup as fasPeopleGroup } from '@fortawesome/free-solid-svg-icons'
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
       
       
            <main className='z-1 px-[67px]  flex w-full h-[80vh] gradient-bg'>


              {/*first div grid*/}
                <div className='  m-auto'>

                  <div className='  w-[500px] p-3 '>
                    <span>Start your Learning</span>
                   
                    <h1 className='text-7xl font-bold'>
                    
                    Elevate Your {' '} 
                    <AnimatePresence mode="wait">
                    <motion.span 
                    key={word}
                    initial={{opacity:0.5, y:20, scale:0.7}}
                    animate={{opacity:1, y:0, scale:1}}

                    transition={{type:'spring', duration:0.3}}
                    exit={{opacity:0, y:-20, scale:0.7}}
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

                             {/* Hero image section  */}
                <div className='relative z-2  w-full h-full'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                <Image className='h-full object' fill src="https://intellex-images.s3.eu-north-1.amazonaws.com/HeroImages/lady2 (3).svg" alt='hero image 1'/>
                </div>

                {/* <div className='absolute bg-white flex flex-col rounded-sm shadow-md p-1 right-48 top-20 justify-start items-start'>
              <div className='flex justify-center  items-center '><FontAwesomeIcon icon={fasPeopleGroup} className='text-green-300 p-1 border bg-green-100 m-1 rounded-md' /><h1>100+ Students</h1>
              </div>
              <h2 className='text-sm font-light'>500+ members growing community</h2>
                </div> */}
                
                <div className='absolute w-38   z-1 top-[400px]  left-72 bg-white rounded-md shadow-md p-2 flex justify-center items-center'>
                <div className='flex justify-center  items-center '><FontAwesomeIcon icon={fasPeopleGroup} className=' p-1 border bg-intellex-green m-1 rounded-[10px]' /><h1> <strong>100+</strong> Students</h1>
                </div></div>

                
                  <div className='absolute border border-intellex-green bg-white flex flex-row top-80 rounded-md shadow-md p-2 justify-center items-center'>
                  <div className='h-10 w-10 rounded-full border-2 border-green-400'>
                    <Image className='w-full h-full object-cover rounded-full border-green-40' width={30} height={30} src="https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/angela.svg" alt='instructores image'/>
                </div>
                <div class="flex flex-col ">
                <div className='font-bold text-sm text-center'>
                  Angela Yu
                </div>
                <div className='text-xsm text-center'>
                  Senior Developer
                </div>
                <div className='flex flex-col w-28'>
                <Image  className='w-full ' src={`https://intellex-images.s3.eu-north-1.amazonaws.com/truststars/truststart5star.svg`} width={100} height={50} alt='star'/>
                </div>
                </div>
                </div>
                <div className='absolute bg-white flex flex-row left-96 top-40 rounded-md shadow-md p-2 justify-center items-center'>
                  <div className='h-10 w-10 rounded-full border-2 border-green-400'>
                    <Image className='w-full h-full object-cover rounded-full border-green-40' width={30} height={30} src="https://intellex-images.s3.eu-north-1.amazonaws.com/Udemy_instructor/anton.svg" alt='instructores image'/>
                </div>
                <div class="flex flex-col ">
                <div className='font-bold text-[12px] text-center'>
                  Anton Voroniuk
                </div>
                <div className='text-[8px] text-center'>
                  Digital Marketing Expert
                </div>
                <div className='flex flex-col w-28'>
                    <Image  className='w-full h-full' src={`https://intellex-images.s3.eu-north-1.amazonaws.com/truststars/truststart5star.svg`} width={100} height={50} alt='star'/>
                </div>
                </div>
                </div>

            
                
                
                </div>
            </main>  
         

              
        </Fragment>
    )
}