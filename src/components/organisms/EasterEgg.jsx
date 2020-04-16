import React, { Fragment, useContext } from 'react';
import { EasterEggContext } from '../../contexts/EasterEggContext';
import audio from './../../audio/darude-sandstorm.mp3';

const EasterEgg = () => {
  const { easterEgg, updateEasterEgg } = useContext(EasterEggContext);
  let easterEggDisplay = null;
  const easterEggAudio = new Audio(audio);

  // if easter egg is activated
  // then generate visuals and play audio
  if (easterEgg) {
    easterEggDisplay = (
      <div
        className='easter-egg'
        onClick={() => {
          updateEasterEgg();
          easterEggAudio.pause();
        }}
      >
        {[...Array(400)].map((e, i) => (
          <div key={`tri-${i}`} className='tri'></div>
        ))}
      </div>
    );
    easterEggAudio.play();
    easterEggAudio.loop = true;
  }

  return <Fragment>{easterEggDisplay}</Fragment>;
};

export default EasterEgg;
