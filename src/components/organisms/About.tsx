import React, { useContext } from 'react';
import { EasterEggContext } from '../../contexts/EasterEggContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  const { updateEasterEgg } = useContext(EasterEggContext)!;

  return (
    <section className='about'>
      <div className='heading-icon' onClick={updateEasterEgg}>
        <FontAwesomeIcon icon={faUserAstronaut} />
      </div>
      <a href='http://rqreyes.com/' target='_blank' rel='noopener noreferrer'>
        Made by Randy Reyes
      </a>
    </section>
  );
};

export default About;
