'use client'
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/components/tanstackQuery/QueryProvider";
import CourseRequest from "./HttpCourse";

import FetchLoader from "../Loadings/FetchLoader";
import ErrorCompany from "../errors/ErrorCompany";
import { faStar as fasStar, faStarHalfAlt,faCertificate, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Group } from "three";

export default function CoursesOne() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['courses'],
    queryFn: () => CourseRequest()
  });

//star function
  const Star = ({ value, rating }) => {
    if (value <= rating) {
      return <FontAwesomeIcon icon={fasStar} className="text-yellow-700" />;
    } else if (value - 0.5 <= rating && rating < value) {
      return <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-700" />;
    } else {
      return <FontAwesomeIcon icon={farStar} className="text-yellow-700" />;
    }
  };

// copy logo

 const GroupIcon = () =>{ 
  return (
  <FontAwesomeIcon className="scale-[85%]" icon={faUserGroup} />
 )
}
  let content = <FetchLoader />;

  if (error) {
    content = <ErrorCompany title={'Unable to fetch courses'} message={error.message} />;
  }

  if (isLoading) {
    content = <FetchLoader />;
  }

  if (data) {
    console.log("this is the data", data);
    const Data = Object.keys(data);
    const original = data[Data];
    console.log("data is ", original);
    const Slice = original.slice(0, 4);
    console.log("this is the slice", Slice);

    content = (
      <ul className="grid grid-cols-4 text-xsm gap-5">
        {Slice.map((items, index) => {
          // Adjust the displayed rating based on the actual rating
          const displayedRating = items.courseRating >= 4.8 ? 5 : items.courseRating;

          return (
            <li  key={index} className="mb-4 shadow-md flex flex-col border-2 p-2 rounded-2xl">
              <div className="mb-2  rounded-lg relative">
                <Image className="w-full rounded-2xl" src={items.courseImage} width={300} height={100} alt='course' />
              <div className="absolute gap-1 right-0 bottom-[3px] flex  m-2 bg-white p-1 ">
              <div className="font-bold text-green-700 text-sm">{items.coursePrice.now} XAF</div>
                <div className="line-through text-red-400 text-[10px]">${items.coursePrice.original}</div>
                
              </div>
              </div>
              <div className="mb-2 border rounded-md max-w-8">
                {
                    items.courseOrigin === "Udemy"?
                    <Image src={'https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/30.svg'} width={30} height={30} alt="30x30" />:null
  
                }</div>
             
              <div>

                <div className="text-sm overflow-clip truncate font-bold h-5">{items.name}</div>
                <div className="  text-slate-500">{items.instructor}</div>
                <div className="flex items-center">
                  <div className="flex mr-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <Star key={value} value={value} rating={displayedRating} />
                    ))}
                  </div>
                  <div>{items.courseRating}</div>
                  <div className="ml-2 text-slate-500 flex justify-center text-[9px] items-center gap-2">( <GroupIcon className="" /> {items.courseNumberOfVotes} votes)</div>
                </div>
              <div>
                {items.bestSeller && <>
                <div className='flex items-center'>
                  <div className="flex justify-between items-center text-white font-bold p-1  bg-green-700"><FontAwesomeIcon icon={faCertificate} color="white " /><p className="ml-[4px]">Premium</p></div>
                  <div className="font-bold ml-3 bg-yellow-200 p-1 text-yellow-700">Best Seller</div>
                  
                </div>
                </>}
              </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="flex mt-20 flex-col justify-center items-stretch">
      {content}
    </div>
  );
}
