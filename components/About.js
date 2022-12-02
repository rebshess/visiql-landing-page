import React from 'react';
import Team from './Team';
import Documentation from './Documentation';
import './about.scss';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className='about-container'>
      <Navbar />
      <Documentation />
      <Team />
    </div>
  );
};

export default About;
