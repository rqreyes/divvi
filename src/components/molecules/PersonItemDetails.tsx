import React from 'react';

// type properties
interface PersonItemDetailsProps {
  itemDetails: ItemType;
  splitPrice: number;
}

const PersonItemDetails: React.FC<PersonItemDetailsProps> = ({
  itemDetails,
  splitPrice,
}) => {
  const itemDetailsPrice = itemDetails.price ? itemDetails.price : '0';

  return (
    <li className='person-item-details'>
      <div>{itemDetails.food}</div>
      <div>
        ${parseFloat(itemDetailsPrice).toFixed(2)} /{' '}
        {itemDetails.personIds.length} = ${splitPrice.toFixed(2)}
      </div>
    </li>
  );
};

export default PersonItemDetails;
