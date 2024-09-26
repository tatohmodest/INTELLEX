import Image from 'next/image';
import React from 'react';

export default function WhyInTelleX() {
  return (
    <>
      <div className='mt-40'>
        <h1 className='text-center font-bold text-4xl text-slate-800'>Why <span className='text-gradient'>InTelleX</span> ?</h1>
        <div className="flex h-96 why mx-16 justify-center items-stretch mt-22">
          <article className='border-r-2 p-6 text-sm flex flex-col justify-between'>
            <Image className='m-4' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/arrow.svg'} width={50} height={50} alt='' />
            <h2 className='text-xl m-4 font-bold text-slate-800'>Learn anything, anywhere</h2>
            <ul>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Access 1000+ courses covering diverse fields</li>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Study at your own pace, on any device</li>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Flexible learning paths tailored to your goals</li>
            </ul>
          </article>

          <article className='p-6 text-sm flex flex-col justify-between'>
            <Image className='m-4' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/certificate.svg'} width={50} height={50} alt='' />
            <h2 className='text-xl m-4 font-bold text-slate-800'>Certification</h2>
            <ul>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Earn industry-recognized certifications</li>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Credentials validated by 15,000+ companies worldwide</li>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Boost your resume and career prospects</li>
            </ul>
          </article>

          <article className='border-l-2 p-6 text-sm flex flex-col justify-between'>
            <Image className='m-4' src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/star.svg'} width={50} height={50} alt='' />
            <h2 className='text-xl m-4 font-bold text-slate-800'>Learn from the best</h2>
            <ul>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Expert instructors with real-world experience</li>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Engage with a community of like-minded learners</li>
              <li><Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/icons/tick.svg'} width={10} height={10} alt='' />Exclusive InTelleX mentorship program for personalized guidance</li>
            </ul>
          </article>
        </div>
      </div>
    </>
  );
}
