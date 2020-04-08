import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemDetails = ({ item }) => {
  const { removeItem } = useContext(ItemContext);

  return (
    <li>
      <input type='text' value={item.name} />
      <input type='text' value={item.price} />
      <button type='button' onClick={() => removeItem(item.id)}>
        remove
      </button>
    </li>
  );
};

export default ItemDetails;
