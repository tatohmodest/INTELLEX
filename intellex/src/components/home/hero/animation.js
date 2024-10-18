import React, { useEffect, useRef } from 'react';
import '@/app/globals.css';
import ParticlesBackground from './backAnimation';

export default function AnimationS({children}) {
  const backgroundRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  const skills = ['AI', 'Programming', 'Forex', 'Marketing', 'Data Science', 'Cybersecurity', 'UX Design', 'Cloud Computing'];

  useEffect(() => {
    const createSkillNode = (skill) => {
      const node = document.createElement('div');
      node.className = 'skill-node';
      node.textContent = skill;
      node.style.left = `${Math.random() * 80 + 10}%`;
      node.style.top = `${Math.random() * 80 + 10}%`;
      backgroundRef.current.appendChild(node);
      return node;
    };

    const createSkillLine = (start, end) => {
      const line = document.createElement('div');
      line.className = 'skill-line';
      const angle = Math.atan2(end.y - start.y, end.x - start.x);
      const length = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
      line.style.width = `${length}px`;
      line.style.transform = `rotate(${angle}rad)`;
      line.style.left = `${start.x}px`;
      line.style.top = `${start.y}px`;
      backgroundRef.current.appendChild(line);
      return line;
    };

    const animateContent = () => {
      setTimeout(() => {
        if (titleRef.current) {
          titleRef.current.style.opacity = '1';
          titleRef.current.style.transform = 'translateY(0)';
        }
      }, 300);
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.style.opacity = '1';
          subtitleRef.current.style.transform = 'translateY(0)';
        }
      }, 600);
    };

    const animateBackground = () => {
      const nodes = skills.map(createSkillNode);
      const lines = [];

      nodes.forEach((node, index) => {
        setTimeout(() => {
          node.style.opacity = '0.6';
          node.style.transform = 'scale(1)';
          
          if (index > 0) {
            const prevNode = nodes[index - 1];
            const start = { x: prevNode.offsetLeft + prevNode.offsetWidth / 2, y: prevNode.offsetTop + prevNode.offsetHeight / 2 };
            const end = { x: node.offsetLeft + node.offsetWidth / 2, y: node.offsetTop + node.offsetHeight / 2 };
            const line = createSkillLine(start, end);
            lines.push(line);
            setTimeout(() => {
              line.style.opacity = '0.3';
              line.style.transform += ' scaleX(1)';
            }, 200);
          }
        }, index * 200);
      });

      const intervalId = setInterval(() => {
        nodes.forEach(node => {
          node.style.left = `${Math.random() * 80 + 10}%`;
          node.style.top = `${Math.random() * 80 + 10}%`;
        });
        lines.forEach((line, index) => {
          const start = { x: nodes[index].offsetLeft + nodes[index].offsetWidth / 2, y: nodes[index].offsetTop + nodes[index].offsetHeight / 2 };
          const end = { x: nodes[index + 1].offsetLeft + nodes[index + 1].offsetWidth / 2, y: nodes[index + 1].offsetTop + nodes[index + 1].offsetHeight / 2 };
          const angle = Math.atan2(end.y - start.y, end.x - start.x);
          const length = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));
          line.style.width = `${length}px`;
          line.style.transform = `rotate(${angle}rad) scaleX(1)`;
          line.style.left = `${start.x}px`;
          line.style.top = `${start.y}px`;
        });
      }, 5000);

      return () => clearInterval(intervalId);
    };

    animateContent();
    const timeoutId = setTimeout(animateBackground, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className='body'>
      <ParticlesBackground  />
    <div className="hero ">
      <div className="background" ref={backgroundRef}></div>
      <div className='content'>
      { children}
      </div>
    
      </div>
       
      </div>
    
  );
}