import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section className='about'>
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faUserAstronaut} />
      </div>
      <a href='http://rqreyes.com/' target='_blank' rel='noopener noreferrer'>
        Made by Randy Reyes
      </a>
    </section>
  );
};

export default About;
