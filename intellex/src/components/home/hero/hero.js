 'use client'
import Image from 'next/image'
import AnimationS from './animation'
import { AnimatePresence, motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {Fragment, useState,useEffect} from 'react'
import { faStar as fasStar, faPeopleGroup as fasPeopleGroup, faLaptopCode, faBullhorn, faSuitcase,faLightbulb, faBook  } from '@fortawesome/free-solid-svg-icons'
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
       
       <AnimationS >
            <main className='z-1 px-[67px]  flex w-full h-[80vh] transparent'>
           

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
                   <div className='flex gap-3  items-center'>
                    <button className='text-green-100 hover:underline  hover:bg-intellex-accent ease-in transition-all duration-150 rounded-md bg-intellex-green p-2 mt-2 '>Get started</button>
                    <button className='bg-green-200 hover:underline rounded-md text-intellex-green p-2 mt-2 '>Explore Courses</button>
                  
                  </div>


                  <div className='flex gap-2 mt-6 items-center'>
                    <div className='flex gap-1 items-center justify-center text-xsm'> <FontAwesomeIcon color='#F1BF5A' icon={faBullhorn} />Public speaking   </div>
                    <div className='flex gap-1 items-center justify-center text-xsm'><FontAwesomeIcon color='#F4876B' icon={faSuitcase} /> Career-Oriented  </div>
                    <div className='flex gap-1 items-center justify-center text-xsm'>  <FontAwesomeIcon color='#B4708D' icon={faLightbulb} />Creative Thinking  </div>
                  </div>
                  </div>
                </div>

                             {/* Hero image section  */}
                <div className='relative z-2  w-full h-full'>
                <div className='w-full h-full flex flex-col justify-center items-center'>
                <Image className='h-full object' fill src="https://intellex-images.s3.eu-north-1.amazonaws.com/HeroImages/chinagirl.svg" alt='hero image 1'/>
                </div>

                {/* <div className='absolute bg-white flex flex-col rounded-sm shadow-md p-1 right-48 top-20 justify-start items-start'>
              <div className='flex justify-center  items-center '><FontAwesomeIcon icon={fasPeopleGroup} className='text-green-300 p-1 border bg-green-100 m-1 rounded-md' /><h1>100+ Students</h1>
              </div>
              <h2 className='text-sm font-light'>500+ members growing community</h2>
                </div> */}
                
                <div className='absolute w-38  z-1 top-[390px]  left-72 bg-white border-intellex-green border rounded-md shadow-md p-2 flex justify-center items-center'>
                <div className='flex justify-center  items-center '><FontAwesomeIcon icon={fasPeopleGroup} className=' text-green-100 p-1  bg-intellex-green border text-xl m-1 rounded-[10px]' /><div className='leading-4 text-start'> <div className='font-bold text-[18px] '>100+</div><div className='text-[12px] text-gray-400'>Students</div> </div>
                </div></div>

                
                  <div className='absolute bg-white border gap-2 border-intellex-green flex flex-row top-80 rounded-md shadow-md p-2 justify-center items-center'>
                  <div className='bg-intellex-green p-1 rounded-sm '>
                 <FontAwesomeIcon className='text-xl  text-green-100' icon={faBook} />
                 </div>
                <div class="flex flex-col leading-4 ">
                <div className='font-bold text-[18px] text-start'>
                 Unlimited Books
                </div>
                <div className='text-xsm text-gray-400 text-start'>
                Unlimited Amazon Books
                </div>
                
                </div>
                </div>
                <div className='absolute bg-white border border-intellex-green flex flex-row gap-2 left-96 top-40 rounded-md shadow-md p-2 justify-center items-center'>
                  <div className='bg-intellex-green p-1 rounded-sm '>
                 <FontAwesomeIcon className='text-xl  text-green-100' icon={faLaptopCode} />
                 </div>
                <div class="flex  text-start leading-5 flex-col ">
                <div className='font-bold text-[18px] '>
                  1K+
                </div>
                <div className='text-[12px] text-gray-500 '>
                  online courses
                </div>
               
                </div>
                </div>

            
                
                
                </div>
               
            </main>  
            </AnimationS>
         

              
        </Fragment>
    )
}