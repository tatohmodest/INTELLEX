'use client'
import { useQuery } from "@tanstack/react-query"
import Testimonial from "../Courses/TestimonialsHttp"
import Image from "next/image"
import { motion } from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlay, faPlayCircle, faStarHalfAlt, faQuoteLeft, faQuoteRight, faStar as fasStar, faArrowRight, faArrowAltCircleLeft, faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons"
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons"
import ErrorCompany from "../errors/ErrorCompany"
import { useRef, useState } from 'react'

export default function Testimonials() {
    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ['course'],
        queryFn: Testimonial
    })

    const [selectedTestimonial, setSelectedTestimonial] = useState(null)
    const [showVideoindex, setShowVideoindex] = useState(null)
    const scrollRef = useRef()

    const scrollForward = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: -400,
                behavior: 'smooth'
            })
        }
    }

    const scrollBackward = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 400,
                behavior: 'smooth'
            })
        }
    }

    const Star = ({ value, rating }) => {
        if (value <= rating) {
            return <FontAwesomeIcon icon={fasStar} className="text-yellow-400" />
        } else if (value - 0.5 <= rating && rating < value) {
            return <FontAwesomeIcon icon={faStarHalfAlt} className="text-yellow-400" />
        } else {
            return <FontAwesomeIcon icon={farStar} className="text-yellow-400" />
        }
    }

    let content = <p></p>

    if (data) {
        if (Array.isArray(data)) {
            content = (
                <>
                    {/* Modal */}
                    {selectedTestimonial && (
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                            onClick={() => setSelectedTestimonial(null)}
                        >
                            <div
                                className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-[50px] h-[50px] rounded-full flex-shrink-0">
                                        <Image
                                            className="object-cover rounded-full h-full w-full"
                                            src={selectedTestimonial.photo || "https://intellex-images.s3.eu-north-1.amazonaws.com/StudentPictures(InTelleX)/intellexUser+(1).svg"}
                                            width={100}
                                            height={100}
                                            alt=""
                                        />
                                    </div>
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-800">{selectedTestimonial.name}</h2>
                                        <p className="text-gray-600">{selectedTestimonial.fieldOfInterest}</p>
                                        <div className="mt-1">
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <Star key={value} value={value} rating={selectedTestimonial.rating} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4">
                                    <FontAwesomeIcon icon={faQuoteLeft} className="text-xl text-gray-400 mr-2" />
                                    <p className="text-gray-700 inline">{selectedTestimonial.testimonial}</p>
                                    <FontAwesomeIcon icon={faQuoteRight} className="text-xl text-gray-400 ml-2" />
                                </div>
                                <button
                                    className="mt-6 px-4 py-2 bg-intellex-green text-white rounded-md hover:bg-opacity-90 transition-colors"
                                    onClick={() => setSelectedTestimonial(null)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <ul ref={scrollRef} className="flex gap-5 scrollbar bg-green-100 shadow-inner p-8 shadow-white overflow-x-scroll mx-10">
                        {data.map((people, index) => (
                            <li key={index} className="relative testyflex bg-white gridtemplate-2 shadow-md rounded-md">
                                <div className="p-5">
                                    <div className="flex gap-2">
                                        <div className="w-[50px] h-[50px] rounded-full">
                                            <Image
                                                className="object-cover rounded-full h-full w-full"
                                                src={people.photo || "https://intellex-images.s3.eu-north-1.amazonaws.com/StudentPictures(InTelleX)/intellexUser+(1).svg"}
                                                width={100}
                                                height={100}
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <h1 className="text-gray-800 font-bold text-lg">{people.name}</h1>
                                            <h2 className="text-gray-400 text-xsm">{people.fieldOfInterest}</h2>
                                            <div>
                                                {[1, 2, 3, 4, 5].map((value) => (
                                                    <Star key={value} value={value} rating={people.rating} />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <FontAwesomeIcon icon={faQuoteLeft} className="mt-3 text-xl" />
                                    <div className="flex flex-col justify-start items-start">
                                        <p className="h-[80px] overflow-hidden text-sm">
                                            {people.testimonial}
                                        </p>
                                        <button
                                            className="text-sm bg-transparent border-none font-bold text-intellex-green underline"
                                            onClick={() => setSelectedTestimonial(people)}
                                        >
                                            Read more
                                        </button>
                                    </div>
                                    <div className="flex items-end px-3 justify-end">
                                    </div>
                                    <div className="border border-gray-300 m-3"></div>
                                    <div className="flex items-center justify-between px-4 cursor-pointer" onClick={() => setShowVideoindex(index)}>
                                        <p className="font-bold text-gray-800 underline">Watch Student&apos;s Testimonial <FontAwesomeIcon icon={faArrowRight} /></p>
                                        <FontAwesomeIcon className="text-3xl" icon={faPlayCircle} />
                                    </div>
                                </div>

                                {showVideoindex === index && (
                                    <>
                                        <div className="w-[100vw] h-[100vh] absolute" onClick={() => setShowVideoindex(null)}>
                                            <div onClick={(e) => e.stopPropagation()} className="bg-white z-30 aspect-video max-w-[400px] h-auto">
                                                {people.video === "" ? <p className="w-[75%] h-[50%] p-10 font-bold text-2xl text-gray-400 text-center">No video Available</p> : <video
                                                    className="w-full h-full object-contain"
                                                    loading="lazy"
                                                    preload="none"
                                                    src={people.video}
                                                    poster="https://intellex-images.s3.eu-north-1.amazonaws.com/StudentPictures(InTelleX)/Blue+White+Modern+Shocking+YouTube+Thumbnail.svg"
                                                    controls
                                                >
                                                </video>}
                                            </div>
                                        </div>
                                    </>
                                )}
                            </li>
                        ))}
                    </ul>
                </>
            )
        } else {
            content = (
                <ErrorCompany title={"Failed to load"} message={"Unable to load testimonial"} refetch={refetch} />
            )
        }
    } else if (isError) {
        content = (
            <ErrorCompany title={"Failed to load"} message={"Unable to load testimonial"} refetch={refetch} />
        )
    }

    return (
        <div className="px-[67px] py-[20px] mt-20 ">
            <h1 className="text-5xl text-gray-800 text-center font-bold mb-2">Success <span className='text-gradient'>story</span></h1>
            <p className="text-gray-600 text-center">
                don&apos;t take it from us, here are our Student&apos;s reviews.
            </p>
            <div className="my-8 p-10 relative">
                <div className="relative flex">
                    {Array.isArray(data) && (
                        <>
                            <button onClick={() => scrollForward()} className="bg-gray-800 text-white p-2 absolute left-0  top-40 ">
                                <FontAwesomeIcon className="text-4xl" icon={faCaretLeft} />
                            </button>
                            <button onClick={() => scrollBackward()} className="bg-gray-800 text-white p-2 absolute right-0  top-40">
                                <FontAwesomeIcon className="text-4xl" icon={faCaretRight} />
                            </button>
                        </>
                    )}
                    {content}
                </div>
            </div>
        </div>
    )
}
