import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Amount = () => {
  const { itemsTotal } = useContext(ItemContext)!;
  const { personsTotal } = useContext(PersonContext)!;

  return (
    <section className='summary'>
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faCommentsDollar} />
      </div>
      <h2>Summary</h2>
      <div className='stats'>
        <p>
          <span>Total</span>
          <span>${itemsTotal.toFixed(2)}</span>
        </p>
        <p>
          <span>Contributions</span>
          <span>${personsTotal.toFixed(2)}</span>
        </p>
      </div>
    </section>
  );
};

export default Amount;
