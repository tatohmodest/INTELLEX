'use client'
import { useQuery } from "@tanstack/react-query";
import CourseRequest from "./HttpCourse";
import { motion } from "framer-motion";
import { faHeart as farHeart } from "@fortawesome/free-regular-svg-icons";
import FetchLoader from "../Loadings/FetchLoader";
import ErrorCompany from "../errors/ErrorCompany";
import { faStar as fasStar, faStarHalfAlt, faCertificate, faUserGroup, faHeart as fasHeart } from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from 'react';

export default function CoursesTwo() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [position, setPosition] = useState('right');
  const cardRefs = useRef([]);
  const detailsRef = useRef(null);
  const [courseTap, setcourseTap] = useState('All Categories')
  const [isTap, setIsTap] = useState(false)



  const { data, error, isLoading, isError } = useQuery({
    queryKey: ['courses' ],
    queryFn: () => CourseRequest()
  });
  const [clickedStates, setClickedStates] = useState([]);

  useEffect(() => {
    if (hoveredIndex !== null && cardRefs.current[hoveredIndex] && detailsRef.current) {
      const card = cardRefs.current[hoveredIndex].getBoundingClientRect();
      const details = detailsRef.current.getBoundingClientRect();
      const screenWidth = window.innerWidth;

      if (card.right + details.width > screenWidth) {
        setPosition('left');
      } else {
        setPosition('right');
      }
    }
  }, [hoveredIndex]);

  //favorites
  
  const Favorite = ({ index }) => {
    const isClicked = clickedStates[index];

    const handleClick = () => {
      const newClickedStates = [...clickedStates];
      newClickedStates[index] = !newClickedStates[index];
      setClickedStates(newClickedStates);
    };

    return (
      <FontAwesomeIcon
        className="scale-[1.5]"
        onClick={handleClick}
        icon={isClicked ? fasHeart : farHeart}
        color="#4a90e2"
      />
    );
  };

  //stars
  const Star = ({ value, rating }) => {
    if (value <= rating) {
      return <FontAwesomeIcon icon={fasStar} className="text-yellow-400" />;
    } else if (value - 0.5 <= rating && rating < value) {
      return <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-400" />;
    } else {
      return <FontAwesomeIcon icon={farStar} className="text-yellow-400" />;
    }
  };

  let content = <FetchLoader />;

  if (isError || !data)  {
    content = <ErrorCompany title={'Unable to fetch courses'} message={error?.message || "There was a problem fetching data please refresh"} />;
  }

  if (isLoading) {
    content = <FetchLoader />;
  }

  if (data) {
    const Data = Object.keys(data);
    const original = data[Data];
   
    if(Array.isArray(original)){

    

      let filteredCourses = original;

        filteredCourses = original.filter((course) => {
         
          return course.courseRating >= 4.7;
        });
      
  
      const Slice = filteredCourses.slice(0, 4);


     content = (
        <ul className="grid grid-cols-4 text-xsm gap-5 place-content-center">
            {Slice.map((items, index) => {
              const displayedRating = items.courseRating >= 4.8 ? 5 : items.courseRating;
  
              return (
                <li
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  ref={el => cardRefs.current[index] = el}
                  key={index}
                  className="mb-4 w-full bg-white border shadow-md relative p-2  flex flex-col rounded-lg"
                >
                  <div className="mb-2 relative">
                    <Image className="w-full rounded-md object-cover" src={items.courseImage} width={300} height={100} alt='course' />
                  </div>
                  <div className="p-2">
                    <div className="mb-2 rounded-md max-w-8">
                      {items.courseOrigin === "Udemy" && (
                        <Image className="rounded-md" src={'https://intellex-images.s3.eu-north-1.amazonaws.com/companylogos/30.svg'} width={30} height={30} alt="30x30" />
                      )}
                    </div>
                    <div className="text-sm m-1 overflow-clip truncate font-bold h-5">{items.name}</div>
                    <div className="m-1 text-xsm truncate text-slate-500">{items.instructor}</div>
                    <div className="flex items-center">
                      <div className="ml-1 font-bold">{items.courseRating}</div>
                      <div className="flex m-1 mr-2">
                        {[1, 2, 3, 4, 5].map((value) => (
                          <Star key={value} value={value} rating={displayedRating} />
                        ))}
                      </div>
                      <div className="ml-2 text-slate-500 flex justify-center text-[10px] items-center gap-2">({items.courseNumberOfVotes} votes)</div>
                    </div>
                    <div className="flex gap-2 m-1 justify-between">
                      <div className="font-bold text-sm text-intellex-green">{items.coursePrice.now} XAF</div>
                      <div className="text-gray-400 line-through font-bold">${items.coursePrice.original}</div>
                    </div>
                    {items.bestSeller && (
                      <div className="flex items-center">
                        <div className="flex justify-between items-center text-white font-bold p-1 bg-intellex-accent">
                          <FontAwesomeIcon icon={faCertificate} color="white" />
                          <p className="ml-[4px]">Best Seller</p>
                        </div>
                      </div>
                    )}
                  </div>
                  {hoveredIndex === index && (
                    <div ref={detailsRef} className={`z-[2] absolute ${position === 'right' ? 'left-full' : 'right-full'} -top-20 flex-col p-8 border-2 h-auto w-[300px] bg-white flex items-left justify-left`}>
                      <h1 className='text-lg font-semibold mb-2'>{items.name}</h1>
                      <div className="flex justify-between">
                        {items.bestSeller && (
                          <div className='flex items-center'>
                            <div className="flex justify-between items-center text-white font-bold p-[4px] bg-intellex-green">
                              <FontAwesomeIcon icon={faCertificate} color="white" />
                              <p className="ml-[4px]">Best Seller</p>
                            </div>
                          </div>
                        )}
                        <h2 className="text-gray-400 text-xs px-2 py-1 rounded">{items.courseDuration}</h2>
                      </div>
                      <div className="text-gray-400 m-1 text-[12px]">{items.instructor}</div>
                      <div className="text-[14px] font-bold m-1">{items.shortDescription}</div>
                      <ul className="list-disc text-[13px] mb-2 font-sans">
                        {items.whatYouWillLearn.slice(0, 3).map((what, key) => (
                          <li className="m-2" key={key}>{what}</li>
                        ))}
                      </ul>
                      <div className="flex gap-2 m-2">
                        <motion.button animate={{transition:"spring"}} className="p-2 bg-intellex-green text-white hover:bg-intellex-accent transition-all ease-in duration-300 w-[80%] font-bold text-sm">Enroll Now</motion.button>
                        <div className="rounded-full w-9 flex flex-col justify-center items-center border text-center border-[#4a90e2] p-1">
                          <Favorite index={index} />
                        </div>
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        
      );
    }
    else{
      content = <ErrorCompany title={'Unable to fetch courses'} message={error?.message || "There was a problem fetching data please refresh"} />;
  
    }

   
  }

  return (

    <div className="flex mt-20 flex-col bg-blue-100 justify-center px-[67px] items-stretch">
    
        <h2 className="text-4xl  font-bold">
          Top <span className="text-gradient">Rated Picks </span>
        </h2>
        <p className="text-gray-600">
    Learner-approved courses to fast-track your success.
  </p>
       
        <div className="flex justify-start items-start">
            <button className="p-2 rounded-md mb-3 bg-intellex-accent text-blue-100 flex justify-center ">expore more</button>
        </div>

          
      {content}
    
    </div>
  );
}
