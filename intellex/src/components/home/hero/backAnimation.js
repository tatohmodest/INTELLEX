import React, { useEffect } from 'react';

const ParticlesBackground = () => {
  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize particles.js
      window.particlesJS('particles-js', {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#00ED64" },
          shape: { type: "circle" },
          opacity: { value: 0.5, random: true },
          size: { value: 3, random: true },
          move: { 
            enable: true, 
            speed: 1, 
            direction: "none", 
            random: true, 
            out_mode: "out",
            bounce: false
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: { 
            onhover: { enable: true, mode: "repulse" }, 
            onclick: { enable: true, mode: "push" },
            resize: true
          },
          modes: { 
            repulse: { distance: 100, duration: 0.4 }, 
            push: { particles_nb: 4 } 
          }
        },
        retina_detect: true
      });
    };

    // Clean up
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div 
      id="particles-js" 
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '90vh',
        zIndex: -100,
        background: 'linear-gradient(135deg, #1A1A1A  0%, #2C3E50 100%)'
      }} 
    />
  );
};

export default ParticlesBackground;