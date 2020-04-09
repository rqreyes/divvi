import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import { PersonContext } from '../contexts/PersonContext';
import ItemDetails from './ItemDetails';

const ItemList = () => {
  const { items } = useContext(ItemContext);
  const { persons, currPersonId } = useContext(PersonContext);

  const itemList = items.map((item) => {
    if (currPersonId) {
      const currPersonDetails = persons.find(
        (person) => person.id === currPersonId
      );
      const currItemChecked = currPersonDetails.itemIds.includes(item.id);

      return (
        <ItemDetails
          key={item.id}
          item={item}
          currItemChecked={currItemChecked}
        />
      );
    } else {
      return <ItemDetails key={item.id} item={item} currItemChecked={false} />;
    }
  });

  return items.length ? <ul>{itemList}</ul> : <p>Add items foo</p>;
};

export default ItemList;
