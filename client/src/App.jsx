import './App.css'
import { useEffect, useState } from 'react';
import Header from './HeaderComponente/Header.jsx';
import Proyecto from './ProyectoComponente/Proyecto.jsx';

function App() {
  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/proyectos');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <Header />
      <main>
        <ul id='projects'>
          {
            projects.map((project) => {
              return(
              <li>
                <Proyecto project={project} />
              </li>
              )
            })
          }
        </ul>
      </main>
    </>
  )
}

export default App