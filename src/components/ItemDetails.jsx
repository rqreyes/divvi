import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetails = ({ item }) => {
  const { removeItem, updateName, updatePrice } = useContext(ItemContext);

  return (
    <li>
      <input
        type='text'
        value={item.name}
        onChange={e => updateName(item.id, e.target.value)}
      />
      <input
        type='number'
        value={item.price}
        onChange={e => updatePrice(item.id, e.target.value)}
      />
      <button type='button' onClick={() => removeItem(item.id)}>
        remove
      </button>
    </li>
  );
};

export default ItemDetails;
