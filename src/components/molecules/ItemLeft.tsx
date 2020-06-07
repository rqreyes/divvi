import React from 'react';

// interface properties
interface iItemLeftProps {
  item: iItem;
}

const ItemLeft: React.FC<iItemLeftProps> = ({ item }) => {
  const itemDetailsFoodDiplay = item.food ? item.food : 'Unknown Item';
  const itemDetailsPriceDisplay = item.price
    ? parseFloat(item.price).toFixed(2)
    : '0.00';

  return (
    <li>
      <span>{itemDetailsFoodDiplay}</span>
      <span>{`$${itemDetailsPriceDisplay}`}</span>
    </li>
  );
};

export default ItemLeft;
