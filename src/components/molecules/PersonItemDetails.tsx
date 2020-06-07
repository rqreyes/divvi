import React from 'react';

// interface properties
interface iPersonItemDetailsProps {
  itemDetails: iItem;
  splitPrice: number;
}

const PersonItemDetails: React.FC<iPersonItemDetailsProps> = ({
  itemDetails,
  splitPrice,
}) => {
  const itemDetailsFoodDiplay = itemDetails.food
    ? itemDetails.food
    : 'Unknown Item';
  const itemDetailsPriceDisplay = itemDetails.price
    ? parseFloat(itemDetails.price).toFixed(2)
    : '0.00';
  const splitPriceDisplay = splitPrice ? splitPrice.toFixed(2) : '0.00';

  return (
    <li className='person-item-details'>
      <div>{itemDetailsFoodDiplay}</div>
      <div>
        ${itemDetailsPriceDisplay} / {itemDetails.personIds.length} = $
        {splitPriceDisplay}
      </div>
    </li>
  );
};

export default PersonItemDetails;
