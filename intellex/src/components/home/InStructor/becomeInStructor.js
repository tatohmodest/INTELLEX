import React from 'react'
import Image from 'next/image'
function BecomeInStructor() {
  return (
    <main className='px-[177px] '>
      
        < div className='grid grid-cols-2  place-items-center'>
            <div className='h-96 w-full  '>
                <Image className="h-full object-contain " src={`https://intellex-images.s3.eu-north-1.amazonaws.com/StudentPictures(InTelleX)/Untitled+design.svg`} width={600} height={400}  alt=""/>
            </div>
            <div className='flex  h-full flex-col justify-center items-center '>
                <article className='w-[500px] p-4'>
                    <h1 className='font-bold text-2xl m-2'>Become and Instructor</h1>
                      <p className='text-[16px] m-2'>Join InTelleX as an instructor and share your expertise with our global community. Get access to our state-of-the-art teaching platform, earn competitive compensation, and make a real impact in students&apos;s lives. Start your teaching journey today!</p>
                      <button className='bg-black font-bold text-white p-2 text-center'>Start now</button>
                </article>
            </div>
        </div>

    </main>
  )
}

export default BecomeInStructor
