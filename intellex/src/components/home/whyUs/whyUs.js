
import React from 'react';
import { faLaptopCode, faUsers,faGraduationCap, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function WhyInTelleX() {
  return (
   <section class="py-[67px] bg-[#dcfce7]">
    <div class="container mx-auto px-6">
      <h2 class="text-md font-bold  text-center">
        Why Choose <span class="text-gradient">InTelleX</span>
      </h2>
      <h1 className='text-gray-800 font-bold text-4xl text-center mb-12' >Unlimited Access to Premium Courses</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="shadow-md rounded-md p-2 bg-intellex-green ">

      <div className='flex gap-2'> 
          <FontAwesomeIcon icon={faGraduationCap} className="text-3xl bg-green-100 p-1 rounded-md text-intellex-green mb-4"/>
          <h3 class="text-xl text-green-100 font-semibold mb-2">Expert Instructors</h3>
          </div>
          <p class="text-green-200">Learn from industry professionals with years of experience.</p>
          <p className='text-green-100   cursor-pointer gap-1 mt-5'>Learn more <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>

        <div class="shadow-md rounded-md p-2 bg-white ">
        <div className='flex gap-2'> 
            <FontAwesomeIcon icon={faLaptopCode} className=" text-3xl p-1 bg-blue-100 rounded-md text-intellex-blue mb-4" />
        <h3 class="text-xl font-semibold mb-2">Hands-on Projects</h3></div>
         
          <p class="text-gray-400">Apply your skills with real-world projects and build your portfolio.</p>
          <p className='text-intellex-green   cursor-pointer gap-1 mt-5'>Learn more <FontAwesomeIcon icon={faArrowRight} /> </p>
        </div>
        <div class="shadow-md rounded-md p-2 bg-white ">
        <div className='flex gap-2'>
          <FontAwesomeIcon icon={faUsers} className="text-3xl bg-intellex-accent text-blue-100 p-1 rounded-md mb-4"/>
          <h3 class="text-xl font-semibold mb-2">Vibrant Community</h3>
          </div>
          
          <p class="text-gray-400">Connect with peers, mentors, and alumni for support and networking.</p>
          <p className='text-intellex-green   cursor-pointer gap-1 mt-5'>Learn more <FontAwesomeIcon icon={faArrowRight} /> </p>

        </div>
      </div>
    </div>
  </section>
    
  );
}
