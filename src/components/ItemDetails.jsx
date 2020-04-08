import React from 'react';

const ItemDetails = ({ item }) => {
  return (
    <li>
      <input type='text' value={item.name} />
      <input type='text' value={item.price} />
    </li>
  );
};

export default ItemDetails;
