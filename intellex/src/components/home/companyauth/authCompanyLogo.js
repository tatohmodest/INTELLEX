'use client'
import GetCompany from "@/components/HttpRequests/Http";
import { useQuery } from "@tanstack/react-query";
import ErrorCompany from "../errors/ErrorCompany";
import Image from "next/image";
import fetchLoader from "../Loadings/FetchLoader";
import { useState } from "react";
import AnimationS from "../hero/animation";


export default function LogoCall(){

//   const {data, isPending, isError, error} = useQuery({
//     queryKey:['logo'],
//     queryFn:()=> GetCompany()
//   })
// console.log(data, isPending, isError,error)

// let content = <p><fetchLoader /></p>
// if(isPending){
//     content = <p><fetchLoader /></p>
// }
// else if(isError){
//     content = <ErrorCompany title="Error Fetching Data" message={error.message} />
// }

// if (data === undefined){
//     content = <ErrorCompany title="No Data" message="Data is Undefined"/>
// }

// else if (data){
//     console.log("this is what we have ",data)
    
//     const Data = Object.values(data)[0]
//     content = Data.map((item, index)=>(
       
//         <li key={index}>
//         <Image className="saturate-0 object-scale-down   transition-all duration-75" src={`https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/${item}`} alt="image logo" width={100} height={50} />
//         </li>
//     ))
    

// }



return(
    
    <div className="bg-white  h-auto w-full text-[16px] flex flex-col justify-center items-center p-16 ">
     <h1 className="text-xl ">High-quality training programs provided by <span className="text-gradient">leading companies</span> </h1>
      
        <ul className=" flex mt-6  justify-center saturate-0  gap-10  items-center ">
            {/* {content} */}
            <li >
        <Image className="object-scale-down   transition-all duration-75" src={`https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/Amazon.svg`} alt="image logo" width={190} height={90} />
        </li>
        <li>
        <Image className="object-scale-down transition-all duration-75" src={`https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/eccouncil.svg`} alt="image logo"  width={190} height={90} />
        
        </li><li><Image className=" object-scale-down   transition-all duration-75" src={`https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/google.svg`} alt="image logo"  width={190} height={90} />
        </li><li><Image className=" object-scale-down   transition-all duration-75" src={`https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/linkedin.svg`} alt="image logo" width={190} height={90} />
        </li><li><Image className=" object-scale-down   transition-all duration-75" src={`https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/LoopingBinarywhite.svg`} alt="image logo"  width={190} height={90} />
        </li><li><Image className=" object-scale-down   transition-all duration-75" src={`https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/Udemy.svg`} alt="image logo" width={190} height={90} />
        </li>
        </ul>
        </div>
        
   
)
}