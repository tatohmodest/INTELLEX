import React from 'react'

function ErrorCompany({title, message}) {
  return (
    <div className='flex w-72 text-center bg-red-300 text-red-500 flex-col'>
        <div>{title}</div>
        <div>{message}</div>
    </div>
  )
}

export default ErrorCompany