import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import { PersonContext } from '../contexts/PersonContext';
import PersonItemDetails from './PersonItemDetails';

const PersonDetails = ({ person }) => {
  const { items, subtotal, tax, tip } = useContext(ItemContext);
  const {
    removePerson,
    updatePerson,
    updateCurrPersonId,
    updatePersonTotal,
  } = useContext(PersonContext);

  const findItemDetails = (itemId) => items.find((item) => item.id === itemId);
  const personItemPrices = person.itemIds.map((itemId) => {
    const itemDetails = findItemDetails(itemId);
    const checkFloat = (itemDetails.splitPrice * 100) % 1;
    const priceInt = Math.floor(itemDetails.splitPrice * 100);

    // check if the price a whole number, if the person is first, and if there's more than one person
    // if so, add 0.01 to the first person's subtotal
    return checkFloat &&
      person.id === itemDetails.personIds[0] &&
      itemDetails.personIds.length > 1
      ? priceInt / 100 + 0.01
      : priceInt / 100;
  });
  const personItemList = person.itemIds.map((itemId, index) => {
    const itemDetails = findItemDetails(itemId);

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
  const personTax = tax ? (personSubtotal / subtotal) * tax : 0;
  const personTip = tip ? (personSubtotal / subtotal) * tip : 0;
  const personTotal = personSubtotal + personTax + personTip;

  updatePersonTotal(person.id, personTotal);

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
      <p>Subtotal: {personSubtotal.toFixed(2)}</p>
      <p>Tax: {personTax.toFixed(2)}</p>
      <p>Tip: {personTip.toFixed(2)}</p>
      <p>Total: {personTotal.toFixed(2)}</p>
      <button type='button' onClick={() => updateCurrPersonId(person.id)}>
        select food items
      </button>
      <button type='button' onClick={() => updateCurrPersonId(null)}>
        done
      </button>
    </li>
  );
};

export default PersonDetails;
