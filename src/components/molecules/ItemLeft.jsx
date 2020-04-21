import React from 'react';

const ItemLeft = ({ item }) => {
  return (
    <li>
      <span>{item.food}</span>
      <span>{`$${item.price.toFixed(2)}`}</span>
    </li>
  );
};

export default ItemLeft;
