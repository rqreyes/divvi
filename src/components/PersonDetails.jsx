import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';
import PersonItemDetails from './PersonItemDetails';

const PersonDetails = ({ person }) => {
  const { items } = useContext(ItemContext);
  const personItemList = person.foodIds.map((foodId) =>
    items.find((item) => item.id === foodId)
  );
  const personItemDetails = personItemList.map((item) => (
    <PersonItemDetails key={item.id} item={item} />
  ));

  return (
    <li>
      <input type='text' value={person.name} />
      <ul>{personItemDetails}</ul>
    </li>
  );
};

export default PersonDetails;
