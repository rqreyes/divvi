import React, { Fragment, useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import { PersonContext } from '../contexts/PersonContext';

const Amount = () => {
  const { total } = useContext(ItemContext);
  const { persons } = useContext(PersonContext);

  const totalDisplay = total || 0;
  const allPersonTotal = persons.reduce((total, person) => {
    return (total += person.total);
  }, 0);
  const amountLeft =
    (total - allPersonTotal).toFixed(2) === '-0.00'
      ? '0.00'
      : (total - allPersonTotal).toFixed(2);

  return (
    <Fragment>
      <p>Total Price: {totalDisplay.toFixed(2)}</p>
      <p>Contributions: {allPersonTotal.toFixed(2)}</p>
      <p>Amount Left: {amountLeft}</p>
    </Fragment>
  );
};

export default Amount;
