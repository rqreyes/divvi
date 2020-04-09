import React, { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContext';
import PersonItemDetails from './PersonItemDetails';

const PersonDetails = ({ person, firstPerson }) => {
  const { removePerson, updatePerson } = useContext(PersonContext);

  const personItemList = person.itemIds.map((itemId) => (
    <PersonItemDetails key={itemId} itemId={itemId} firstPerson={firstPerson} />
  ));

  return (
    <li>
      <input
        type='text'
        value={person.name}
        onChange={(e) => updatePerson(person.id, e.target.value)}
      />
      <button type='button' onClick={() => removePerson(person.id)}>
        remove
      </button>
      <ul>{personItemList}</ul>
      <button type='button'>select food items</button>
    </li>
  );
};

export default PersonDetails;
