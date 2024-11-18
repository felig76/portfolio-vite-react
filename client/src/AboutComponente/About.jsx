import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './About.css';

function About() {
    
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/infoAbout')
    .then((res) => {
    setInfo(res.data)
    })
  });

  return (
    <>
      <div id='infoPersonal'>
        <div>
          <h1 id='textoAbout'>about</h1>
          <h1 id='textoSobreMi'>sobre mí</h1>
        </div>

        <p>{info.parrafoPresentacion}</p>
      </div>
    </>
  )
}

export default About