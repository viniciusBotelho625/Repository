import './portifolio.scss';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

export default function Portifolio() {
    
  const [projects, setProjects] = useState([]);
  const ref = useRef();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('projects.json');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.log("Error when searching for projects", error);
      }
    };
    fetchProjects();
  }, []);

    
  const Single = ({ project }) => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
      target:ref
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    return(
      <section >
        <div className="container">
          <div className="wrapper">
            <div className="image-container" ref={ref}>
              <img src={project.img} alt="Photo this project" />
            </div>
            <motion.div className="text-container" style={{y}}>
              <h2>{project.title}</h2>
              <p>{project.desc}</p>
              <button>See Demo</button>
            </motion.div>
          </div>
        </div>
      </section>
    ) 
  }; 

  const { scrollYProgress } = useScroll({
    target:ref, 
    offset:["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100, 
    damping: 30
  });

  
  return (
    <div className='portifolio' ref={ref}>
      <div className='progress'>
        <h1>Featured Works</h1>
        <motion.div style={{scaleX}} className="progress-bar"></motion.div>
      </div>
      {projects.map((project) => (
        <Single project={project} key={project.id}/>
      ))}
    </div>
  )
}