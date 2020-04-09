import React, { useContext } from 'react';
import { CalculateContext } from '../contexts/CalculateContext';
import PersonItemDetails from './PersonItemDetails';

const PersonDetails = ({ person, firstPerson }) => {
  const { personItems } = useContext(CalculateContext);
  const personItemList = personItems.find(
    (personItem) => personItem.personId === person.id
  ).foodIds;

  const personItemDetails = personItemList.map((foodId) => (
    <PersonItemDetails
      key={`food-id-${foodId}`}
      foodId={foodId}
      firstPerson={firstPerson}
    />
  ));

  return (
    <li>
      <input type='text' value={person.name} />
      <button type='button'>remove</button>
      <ul>{personItemDetails}</ul>
      <button type='button'>select food items</button>
    </li>
  );
};

export default PersonDetails;
