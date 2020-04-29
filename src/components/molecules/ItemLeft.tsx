import React from 'react';

// type properties
interface ItemLeftProps {
  item: ItemType;
}

const ItemLeft: React.FC<ItemLeftProps> = ({ item }) => {
  return (
    <li>
      <span>{item.food}</span>
      <span>{`$${item.price}`}</span>
    </li>
  );
};

export default ItemLeft;
