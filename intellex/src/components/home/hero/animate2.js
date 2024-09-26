// import React, { useEffect, useState, useRef } from 'react';
// import particlesJS from 'particles.js'


// const ProfessionalSkillsPlatformHero = () => {
//   const [titleText, setTitleText] = useState('Master Your Future');
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);

//   const skills = ['AI', 'Programming', 'Forex', 'Marketing', 'Data Science', 'Cybersecurity', 'UX Design', 'Cloud Computing', 'Blockchain'];
//   const colors = ['intellex-green', 'intellex-accent', 'intellex-blue', 'intellex-light', 'intellex-green', 'intellex-accent', 'intellex-blue', 'intellex-light', 'intellex-green'];

//   useEffect(() => {
//     // Particle.js configuration
//     particlesJS('particles-js', {
//       particles: {
//         number: { value: 80, density: { enable: true, value_area: 800 } },
//         color: { value: "#00ED64" },
//         shape: { type: "circle" },
//         opacity: { value: 0.5, random: true },
//         size: { value: 3, random: true },
//         move: { enable: true, speed: 1, direction: "none", random: true, out_mode: "out" }
//       },
//       interactivity: {
//         detect_on: "canvas",
//         events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" } },
//         modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
//       }
//     });

//     // Create floating items
//     skills.forEach((skill, index) => {
//       createFloatingItem(skill, colors[index]);
//     });

//     // Interactive title
//     const words = ['Innovate', 'Excel', 'Advance', 'Transform'];
//     let wordIndex = 0;

//     const titleInterval = setInterval(() => {
//       if (titleRef.current) {
//         titleRef.current.classList.add('opacity-0', '-translate-y-5');
//         setTimeout(() => {
//           setTitleText(words[wordIndex]);
//           wordIndex = (wordIndex + 1) % words.length;
//           if (titleRef.current) {
//             titleRef.current.classList.remove('opacity-0', '-translate-y-5');
//           }
//         }, 500);
//       }
//     }, 3000);

//     return () => clearInterval(titleInterval);
//   }, []);

//   const createFloatingItem = (skill, color) => {
//     const item = document.createElement('div');
//     item.className = `floating-item bg-${color} text-intellex-dark`;
//     item.style.width = `${Math.random() * 80 + 60}px`;
//     item.style.height = item.style.width;
//     item.textContent = skill;
//     item.style.left = `${Math.random() * 90}%`;
//     item.style.top = `${Math.random() * 90}%`;
//     heroRef.current?.appendChild(item);

//     const animateItem = () => {
//       const newX = Math.random() * 90;
//       const newY = Math.random() * 90;
//       item.style.transition = `all ${Math.random() * 5 + 5}s ease-in-out`;
//       item.style.left = `${newX}%`;
//       item.style.top = `${newY}%`;
//     };

//     animateItem();
//     setInterval(animateItem, 10000);
//   };

//   return (
//     <div className="hero-container w-full h-screen overflow-hidden font-sans gradient-bg">
//       <div id="particles-js" className="absolute inset-0"></div>
//       <div className="hero w-full h-full flex justify-center items-center relative" ref={heroRef}>
//         <h1 
//           className="title text-6xl md:text-7xl lg:text-8xl text-center z-10 text-gradient font-bold transition-all duration-300 ease-in-out"
//           ref={titleRef}
//         >
//           {titleText}
//         </h1>
//       </div>
//       <style jsx>{`
//         .floating-item {
//           position: absolute;
//           border-radius: 50%;
//           opacity: 0.9;
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           font-size: 0.875rem;
//           box-shadow: 0 0 20px rgba(255,255,255,0.3);
//           cursor: pointer;
//           transition: all 0.3s ease;
//           text-align: center;
//         }
//         .floating-item:hover {
//           transform: scale(1.1);
//           opacity: 1;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ProfessionalSkillsPlatformHero;