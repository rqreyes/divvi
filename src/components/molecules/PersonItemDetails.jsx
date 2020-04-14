import React from 'react';

const PersonItemDetails = ({ itemDetails, splitPrice }) => {
  const itemDetailsPrice = itemDetails.price ? itemDetails.price : 0;

  return (
    <li>
      <p>
        <span>{itemDetails.food}</span>
        <span>
          {itemDetailsPrice.toFixed(2)} / {itemDetails.personIds.length} ={' '}
          {splitPrice.toFixed(2)}
        </span>
      </p>
    </li>
  );
};

export default PersonItemDetails;
