import React, { Fragment, useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';

const Amount = () => {
  const { total } = useContext(ItemContext);
  const { persons } = useContext(PersonContext);

  // calculate the contributions
  const personsTotal = persons.reduce((total, person) => {
    return (total += person.total);
  }, 0);

  // calculate the amount left
  const amountLeft =
    (total - personsTotal).toFixed(2) === '-0.00' ? 0 : total - personsTotal;

  const differenceDisplay = amountLeft ? 'difference-display' : '';

  return (
    <Fragment>
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
        <strong>${amountLeft.toFixed(2)}</strong>
      </p>
    </Fragment>
  );
};

export default Amount;
