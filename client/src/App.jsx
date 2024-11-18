import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './HeaderComponente/Header.jsx';
import Proyecto from './ProyectoComponente/Proyecto.jsx';
import About from './AboutComponente/About.jsx'

function App() {
  
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/proyectos')
    .then((res) => {
      setProjects(res.data)
    })
  });

  return (
    <>
      <Header />
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
      
      <div id='about'></div>
      <About />
    </>
  )
}

export default App