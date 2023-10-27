import React from 'react';
import Content from './content';
import ScrollMenu from './ScrollMenu';
import Navbar from './Navbar';

const Hero = () => {
  return (
    <section className="page-section" id='Home'>
        <div className="hero">
            <Navbar/>
            <Content />
            <ScrollMenu />
        </div>
    </section>
  )
}

export default Hero