import Image from 'next/image';
import React from 'react';
import { faLaptopCode, faUsers,faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function WhyInTelleX() {
  return (
   <section class="py-20 bg-gray-800">
    <div class="container mx-auto px-6">
      <h2 class="text-4xl font-bold mb-12 text-center">
        Why Choose <span class="text-gradient">InTelleX</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="text-center">

          <FontAwesomeIcon icon={faGraduationCap} className="text-5xl text-intellex-green mb-4"/>
          <h3 class="text-xl font-semibold mb-2">Expert Instructors</h3>
          <p class="text-gray-400">Learn from industry professionals with years of experience.</p>
        </div>
        <div class="text-center">
    
          <FontAwesomeIcon icon={faLaptopCode} className=" text-5xl text-intellex-blue mb-4" />
          <h3 class="text-xl font-semibold mb-2">Hands-on Projects</h3>
          <p class="text-gray-400">Apply your skills with real-world projects and build your portfolio.</p>
        </div>
        <div class="text-center">
         
          <FontAwesomeIcon icon={faUsers} className="text-5xl text-intellex-accent mb-4"/>
          <h3 class="text-xl font-semibold mb-2">Vibrant Community</h3>
          <p class="text-gray-400">Connect with peers, mentors, and alumni for support and networking.</p>
        </div>
      </div>
    </div>
  </section>
    
  );
}
