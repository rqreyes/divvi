import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import Difference from '../molecules/Difference';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Amount = () => {
  const { total } = useContext(ItemContext)!;
  const { persons } = useContext(PersonContext)!;

  // calculate the contributions
  const personsTotal = persons.reduce((total, person) => {
    return (total += person.total);
  }, 0);

  return (
    <section className='summary'>
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faCommentsDollar} />
      </div>
      <h2>Summary</h2>
      <div className='difference-stats'>
        <p>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <p>
          <span>Contributions</span>
          <span>${personsTotal.toFixed(2)}</span>
        </p>
      </div>
      <Difference personsTotal={personsTotal} />
    </section>
  );
};

export default Amount;
