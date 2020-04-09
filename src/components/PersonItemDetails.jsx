import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const PersonItemDetails = ({ itemId, firstPerson }) => {
  const { items } = useContext(ItemContext);

  const itemDetails = items.find((item) => item.id === itemId);
  const itemPersonCount = itemDetails.personIds.length;

  // check if the price is odd, if the person is first, and if there's more than one person
  // if so, add 0.01 to the first person's balance
  const calcPrice =
    Math.round(itemDetails.price * 100) % 2 === 1 &&
    firstPerson &&
    itemPersonCount > 1
      ? (Math.floor(itemDetails.splitPrice * 100) / 100 + 0.01).toFixed(2)
      : (Math.floor(itemDetails.splitPrice * 100) / 100).toFixed(2);

  return (
    <li>
      <div>
        <span>{itemDetails.food}</span>
        <span>
          {itemDetails.price} / {itemPersonCount} = {calcPrice}
        </span>
      </div>
    </li>
  );
};

export default PersonItemDetails;
