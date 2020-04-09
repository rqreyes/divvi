import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import { PersonContext } from '../contexts/PersonContext';
import PersonItemDetails from './PersonItemDetails';

const PersonDetails = ({ person, firstPerson }) => {
  const { items, subtotal, tax, tip } = useContext(ItemContext);
  const { removePerson, updatePerson } = useContext(PersonContext);

  const personItemPrices = person.itemIds.map((itemId) => {
    const itemDetails = items.find((item) => item.id === itemId);
    const priceInt = Math.floor(itemDetails.splitPrice * 100);

    // check if the price is odd, if the person is first, and if there's more than one person
    // if so, add 0.01 to the first person's subtotal
    return priceInt % 2 === 1 && firstPerson && itemDetails.personIds.length > 1
      ? priceInt / 100 + 0.01
      : priceInt / 100;
  });
  const personItemList = person.itemIds.map((itemId, index) => {
    const itemDetails = items.find((item) => item.id === itemId);

    return (
      <PersonItemDetails
        key={itemId}
        itemDetails={itemDetails}
        splitPrice={personItemPrices[index]}
      />
    );
  });
  const personSubtotal = personItemPrices.reduce(
    (sum, price) => (sum += price),
    0
  );
  const personTax = (personSubtotal / subtotal) * tax;
  const personTip = (personSubtotal / subtotal) * tip;
  const personTotal = personSubtotal + personTax + personTip;

  return (
    <li>
      <input
        type='text'
        value={person.name}
        onChange={(e) => updatePerson(person.id, e.target.value)}
      />
      <button type='button' onClick={() => removePerson(person.id)}>
        remove
      </button>
      <ul>{personItemList}</ul>
      <p>Tax: {personTax.toFixed(2)}</p>
      <p>Tip: {personTip.toFixed(2)}</p>
      <p>Subtotal: {personSubtotal.toFixed(2)}</p>
      <p>Total: {personTotal.toFixed(2)}</p>
      <button type='button'>select food items</button>
    </li>
  );
};

export default PersonDetails;
