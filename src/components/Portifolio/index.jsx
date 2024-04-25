import './portifolio.scss';
import { useEffect, useState } from 'react';

export default function Portifolio() {
    
    const [projects, setProjects] = useState([]);

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

    console.log(projects);
    
    return (
        <div>
            <section>Portifolio 1</section>
            <section>Portifolio 2</section>
            <section>Portifolio 3</section>
        </div>
    )
}