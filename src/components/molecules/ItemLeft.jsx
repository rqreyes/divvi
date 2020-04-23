import React from 'react';

const ItemLeft = ({ item }) => {
  return (
    <li>
      <span>{item.food}</span>
      <span>{`$${item.price}`}</span>
    </li>
  );
};

export default ItemLeft;
