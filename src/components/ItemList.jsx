import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import ItemDetails from './ItemDetails';

const ItemList = () => {
  const { items } = useContext(ItemContext);
  const itemList = items.map(item => <ItemDetails key={item.id} item={item} />);

  return (
    <React.Fragment>
      <h2>Receipt</h2>
      <section>
        <ul>{itemList}</ul>
      </section>
    </React.Fragment>
  );
};

export default ItemList;
