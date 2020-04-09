import React from 'react';

const PersonItemDetails = ({ itemDetails, splitPrice }) => {
  return (
    <li>
      <p>
        <span>{itemDetails.food}</span>
        <span>
          {itemDetails.price.toFixed(2)} / {itemDetails.personIds.length} ={' '}
          {splitPrice.toFixed(2)}
        </span>
      </p>
    </li>
  );
};

export default PersonItemDetails;
