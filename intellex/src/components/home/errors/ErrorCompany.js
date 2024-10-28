import React from 'react'
import { motion } from 'framer-motion'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ErrorCompany({title, message,refetch}) {
  return (
    <motion.div initial={{opacity:0 , x:-400}}
    animate={{opacity:1, x:0}}
    transition={{type:'spring',duration:0.4}}
    className='flex w-72 text-center bg-red-300 text-red-500 flex-col'>
       <FontAwesomeIcon className='text 2xl' icon={faExclamationCircle} />
        <div>{title}</div>
        <div>{message}</div>
        <button  className=" m-3 p-1 border-none bg-intellex-blue text-white rounded-md" onClick={ ()=>refetch()}>retry</button>
    </motion.div>
  )
}

export default ErrorCompany