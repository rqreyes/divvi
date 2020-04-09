import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import { PersonContext } from '../contexts/PersonContext';
import PersonItemDetails from './PersonItemDetails';

const PersonDetails = ({ person, firstPerson }) => {
  const { items } = useContext(ItemContext);
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
  const personTotal = personItemPrices
    .reduce((sum, price) => (sum += price), 0)
    .toFixed(2);

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
      <p>Tax:</p>
      <p>Total: {personTotal}</p>
      <button type='button'>select food items</button>
    </li>
  );
};

export default PersonDetails;
