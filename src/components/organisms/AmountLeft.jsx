import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Amount = () => {
  const { total } = useContext(ItemContext);
  const { persons } = useContext(PersonContext);

  // calculate the contributions
  const personsTotal = persons.reduce((total, person) => {
    return (total += person.total);
  }, 0);

  // calculate the amount left
  const amountLeftFixed = (total - personsTotal).toFixed(2);
  const amountLeft =
    amountLeftFixed === '-0.00' || amountLeftFixed === '0.00'
      ? 0
      : amountLeftFixed;
  const differenceDisplay = amountLeft ? 'difference-display' : '';

  return (
    <section className='amount-left'>
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faCommentsDollar} />
      </div>
      <h2>Amount Left</h2>
      <p>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </p>
      <p>
        <span>Contributions</span>
        <span>${personsTotal.toFixed(2)}</span>
      </p>
      <p className={differenceDisplay}>
        <strong>Difference</strong>
        <strong>${amountLeftFixed}</strong>
      </p>
    </section>
  );
};

export default Amount;
