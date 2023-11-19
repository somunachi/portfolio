import Aboutme from './components/Aboutme';
import Skillset from './components/Skillset';
import Projects from './components/Projects';
import Connect from './components/Connect';
// import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero';

function App() {
  return (
  <div id='body'>
    <Hero />
    <Aboutme />
    <Skillset />
    <Projects />
    <Connect />
  </div>
  )
}

export default App
