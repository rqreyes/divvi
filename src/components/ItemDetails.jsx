import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetails = ({ item }) => {
  const { removeItem, updateFood, updatePrice } = useContext(ItemContext);

  return (
    <li>
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
      <button type='button' onClick={() => removeItem(item.id)}>
        remove
      </button>
    </li>
  );
};

export default ItemDetails;
