"use client";
import React, { useEffect, useState } from "react";
import style from "./page.module.css";
import StarRating from "@/components/StarRating/StarRating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCertificate,
  faCheckCircle,
  faChevronDown,
  faClosedCaptioning,
  faCloudDownloadAlt,
  faFile,
  faFileAlt,
  faGlobe,
  faInfinity,
  faMobileAlt,
  faStar,
  faStarHalf,
  faStarHalfStroke,
  faUserGroup,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

function Page() {
  const [course, setCourse] = useState(null); // Store only the first course object
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const exchangeRate = 600;

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(
          "https://intellex-48404-default-rtdb.firebaseio.com/courses.json"
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Extract the first object from the fetched data
        const firstKey = Object.keys(data)[0]; // Get the first key
        const firstCourse = Array.isArray(data[firstKey])
          ? data[firstKey][2]
          : data[firstKey]; // Get the first course

        setCourse(firstCourse); // Set the first course
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (!course || !course.coursePrice) {
    return <p>No courses available</p>;
  }
  const originalPriceInXAF = course.coursePrice.original * exchangeRate;
  const discountPercentage =
    originalPriceInXAF > 0
      ? Math.round(
          ((originalPriceInXAF - course.coursePrice.now) / originalPriceInXAF) *
            100
        )
      : 0;
  return (
    <section className={style.main}>
      <div className={style.head}>
        <h1 className="container mx-auto px-6 text-2xl font-bold text-intellex-green">
          InTelleX
        </h1>
      </div>
      <div className={style.info}>
        <div
          className={`${style.courseContent} flex-col md:flex-row  container mx-auto`}
        >
          <div className={`${style.leftContent} md:w-1/2 md:mb-0`}>
            <h1 className="text-4xl font-bold">{course.name}</h1>
            <p className="text-xl text-gray-300">
              {course.courseContentBriefing}
            </p>
            <div className={style.profile}>
              <div className={style.leftProfile}>
                <img
                  src="https://via.placeholder.com/60"
                  className="shadow-2xl"
                  alt="profile"
                />
              </div>
              <div className={style.right}>
                <h2 className="font-semibold">{course.instructor}</h2>
                <p className="text-sm text-gray-400">
                  Senior Web Developer & Instructor
                </p>
              </div>
            </div>

            <div className={style.rating}>
              <StarRating rating={course.courseRating} />
              <span>{`${course.courseRating} (${course.courseNumberOfVotes} ratings)`}</span>
            </div>
            <div className={style.metaData}>
              <div>
                <FontAwesomeIcon icon={faUsers} />
                <span>15,234 students enrolled</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faGlobe} />
                <span>{course.language}</span>
              </div>
              <div>
                <FontAwesomeIcon icon={faClosedCaptioning} />
                <span>Subtitles</span>
              </div>
            </div>
            <div className={style.price}>
              <div
                className={`${style.newPrice} text-3xl font-bold text-intellex-green mr-4`}
              >
                {course.coursePrice.now} XAF
              </div>
              <div
                className={`${style.originalPrice} text-xl text-gray-400 line-through`}
              >
                ${course.coursePrice.original}
              </div>
              {originalPriceInXAF > 0 && (
                <div
                  className={`${style.discount} ml-4 bg-intellex-accent text-white px-2 py-1 rounded-full text-sm`}
                >
                  {discountPercentage}% OFF
                </div>
              )}
            </div>
          </div>
          <div className={`${style.rightContent} md:w-1/2`}>
            <img src={course.courseImage} alt="course-poster" />
          </div>
        </div>
      </div>
      <div className={style.courseDetails}>
        <div className={style.details}>
          <div className={`${style.leftD} lg:w-2/3 pr-8`}>
            <div className={style.toLearn}>
              <h1>What you'll learn</h1>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 `}>
                {course.whatYouWillLearn.map((item, index) => (
                  <div className="flex items-start gap-2" key={index}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={style.courseStages}>
              <h1>Course content</h1>
              <div
                className={`${style.courseStage} bg-gray-800 rounded-lg p-6 mb-12`}
              >
                <div
                  className={`${style.top} flex justify-between items-center mb-4`}
                >
                  <span className="text-lg font-semibold">
                    15 sections • 157 lectures • 20h 30m total length
                  </span>
                  <Link
                    href={""}
                    className="text-intellex-blue hover:underline"
                  >
                    Expand all sections
                  </Link>
                </div>
                <div className={style.bot}>
                  <ol>
                    <li className="border-b border-gray-700 py-4 flex justify-between items-center cursor-pointer">
                      <p className="text-lg font-semibold">
                        1. Introduction to Full Stack Development
                      </p>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className={style.requirements}>
              <h1>Requirements</h1>
              <ul
                className="text-gray-100"
                style={{
                  listStyle: "disc",
                }}
              >
                <li>Basic understanding of HTML, CSS, and JavaScript</li>
                <li>Familiarity with command line interface</li>
                <li>
                  A computer with internet access and the ability to install
                  software
                </li>
              </ul>
            </div>
            <div className={style.desc}>
              <h1>Description</h1>
              <p className="text-gray-300 mb-6">
                This comprehensive course will take you on a journey through the
                entire web development stack. You'll start by mastering frontend
                technologies like HTML5, CSS3, and JavaScript, then dive deep
                into modern frameworks like React. On the backend, you'll learn
                to build robust server-side applications using Node.js and
                Express, and work with databases like MongoDB and PostgreSQL.
              </p>
              <p className="text-gray-300 mb-6">
                By the end of this course, you'll have the skills to create
                complete, scalable web applications from the ground up, and be
                ready to take on real-world projects as a full stack developer.
              </p>
            </div>
            <div className={style.instructor}>
              <div className={style.leftT}>
                <img
                  src="https://via.placeholder.com/120"
                  alt="profile"
                  className="rounded-full"
                />
              </div>
              <div className={style.rightT}>
                <h2 className="text-xl font-semibold mb-2">John Deo</h2>
                <p className="text-gray-400 mb-4">
                  Senior Web Developer & Instructor
                </p>
                <div
                  className={`${style.record} text-gray-100 gap-4 flex items-center mb-4`}
                >
                  <p>
                    <FontAwesomeIcon icon={faStar} />
                    <span>4.8 Instructor Rating</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faAward} />
                    <span>65,432 Reviews</span>
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faUserGroup} />
                    <span>234,567 Students</span>
                  </p>
                </div>
                <p className="text-gray-300">
                  John has been developing web applications for over 15 years
                  and has worked with companies ranging from startups to Fortune
                  500s. He's passionate about teaching and has helped thousands
                  of students launch their careers in web development.
                </p>
              </div>
            </div>
          </div>
          <div className={`${style.rightD} lg:w-1/3`}>
            <div
              className={`${style.box} bg-gray-800 rounded-lg p-6 sticky top-6`}
            >
              <h1 className="text-2xl font-bold mb-4">
                This course includes :
              </h1>
              <ul>
                {course.courseInclusion.duration && (
                  <li>
                    <FontAwesomeIcon
                      icon={faVideo}
                      className="text-intellex-blue w-5"
                    />
                    <p>{course.courseInclusion.duration}</p>
                  </li>
                )}
                <li>
                  <FontAwesomeIcon
                    icon={faFileAlt}
                    className="text-intellex-green w-5"
                  />
                  <p>75 articles</p>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCloudDownloadAlt}
                    className="text-intellex-accent w-5"
                  />
                  <p>85 downloadable resources</p>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faInfinity}
                    className="text-purple-500 w-5"
                  />
                  <p>Full lifetime access</p>
                </li>
                {course.courseInclusion.accessOnMobileAndTV && (
                  <li>
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      className="text-pink-500 w-5"
                    />
                    <p>Access on mobile and TV</p>
                  </li>
                )}

                {course.courseInclusion.certificateOfCompletion && (
                  <li>
                    <FontAwesomeIcon
                      icon={faCertificate}
                      className="text-yellow-500 w-5"
                    />
                    <p>Certificate of completion</p>
                  </li>
                )}
              </ul>
              <button className="w-full bg-intellex-blue hover:bg-intellex-accent text-white font-bold py-3 px-4 rounded-full transition duration-300 mb-4">
                Enroll now
              </button>
              <p className="text-center text-gray-400 text-sm mb-4">
                30-Day Money-Back Guarantee
              </p>
              <div className={`${style.links} text-center`}>
                <Link className="text-intellex-blue hover:underline" href={""}>
                  Get this course
                </Link>
                <span className="mx-2 text-gray-500">|</span>
                <Link className="text-intellex-blue hover:underline" href={""}>
                  Apply coupon
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2024 InTelleX. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}

export default Page;
