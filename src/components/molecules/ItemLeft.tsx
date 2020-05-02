import React from 'react';

// type properties
interface ItemLeftProps {
  item: ItemType;
}

const ItemLeft: React.FC<ItemLeftProps> = ({ item }) => {
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
