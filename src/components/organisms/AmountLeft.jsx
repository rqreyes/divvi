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

  return (
    <Fragment>
      <p>Total: {total.toFixed(2)}</p>
      <p>Contributions: {personsTotal.toFixed(2)}</p>
      <p>Difference: {amountLeft.toFixed(2)}</p>
    </Fragment>
  );
};

export default Amount;
