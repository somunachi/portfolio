import React from 'react';
import Aboutme from './Aboutme';
import Skillset from './Skillset';
import Projects from './Projects';
import Connect from './Connect';
import { Route, Routes } from 'react-router-dom';
import Hero from './Hero';

function App() {
  return (
  <body>
    <Hero />
    <Aboutme />
    <Skillset />
    <Projects />
    <Connect />
  </body>
  )
}

export default App
