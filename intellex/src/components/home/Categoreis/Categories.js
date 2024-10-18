import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
function Categories() {
    const list = ['UI/UX Designer', 'Digital Marketing','React Front-End Development', 'Python Django', 'Nodejs Backend', 'Front-End Web Developer', 'NetWorking', 'Ethical Hacking','EC-Council ECH','DevOps', 'CyberSecurity','Data Science','Graphic Designing', 'Business Intelligence', 'More..']
  return (
    <div className='px-[67px]'>
      <h1 className='text-4xl  font-bold text-gray-800'>Discover <span className='text-gradient'> Roadmap</span> of your Career</h1>
      <h2>Find Your next role </h2>
      <ul className='flex flex-wrap  gap-3 mt-6'>

        {list.map((course)=>{
            return (
                <li key={course} className='cursor-pointer border-2  card-hover border-gray-400 p-3 flex gap-2 justify-center items-center '>
                   {course}
                   <FontAwesomeIcon icon={faPlus} />
                </li>
            )
        })}
      </ul>
    </div>
  )
}

export default Categories
