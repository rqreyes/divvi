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
  const handleOnClick = () => {
    removeItem(item.id);
    removeAllPersonItemId(item.id);
  };

  return (
    <li>
      <input
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
      <button type='button' onClick={() => handleOnClick()}>
        remove
      </button>
    </li>
  );
};

export default ItemDetails;
