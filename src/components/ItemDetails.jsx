import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import { PersonContext } from '../contexts/PersonContext';

const ItemDetails = ({ item, currItemChecked }) => {
  const {
    removeItem,
    updateFood,
    updatePrice,
    addCurrItemPersonId,
    removeCurrItemPersonId,
  } = useContext(ItemContext);
  const {
    currPersonId,
    addCurrPersonItemId,
    removeCurrPersonItemId,
    removeAllPersonItemId,
  } = useContext(PersonContext);

  const addCurrIds = () => {
    addCurrItemPersonId(item.id, currPersonId);
    addCurrPersonItemId(item.id);
  };
  const removeCurrIds = () => {
    removeCurrItemPersonId(item.id, currPersonId);
    removeCurrPersonItemId(item.id);
  };
  const removeItemIds = () => {
    removeItem(item.id);
    removeAllPersonItemId(item.id);
  };

  let className = '';
  if (!currPersonId) className += 'hide';

  return (
    <li>
      <input
        className={className}
        type='checkbox'
        checked={currItemChecked}
        onChange={(e) => {
          if (e.target.checked) addCurrIds();
          else removeCurrIds();
        }}
      />
      <input
        type='text'
        value={item.food}
        onChange={(e) => updateFood(item.id, e.target.value)}
      />
      <input
        type='number'
        value={item.price}
        onChange={(e) => updatePrice(item.id, e.target.value)}
      />
      <button type='button' onClick={() => removeItemIds()}>
        remove
      </button>
    </li>
  );
};

export default ItemDetails;
