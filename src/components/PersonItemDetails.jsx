import React from 'react';

const PersonItemDetails = ({ item }) => {
  return (
    <li>
      <span>{item.food}</span>
      <span>
        {item.price.toFixed(2)} / {item.personIds.length} ={' '}
        {item.splitPrice.toFixed(2)}
      </span>
    </li>
  );
};

export default PersonItemDetails;
