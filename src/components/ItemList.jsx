import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetails from './ItemDetails';

const ItemList = () => {
  const { items } = useContext(ItemContext);
  const itemList = items.map((item) => (
    <ItemDetails key={item.id} item={item} />
  ));

  return items.length ? <ul>{itemList}</ul> : <p>Add items foo</p>;
};

export default ItemList;
