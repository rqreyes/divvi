import React, { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContext';
import PersonDetails from './PersonDetails';

const PersonList = () => {
  const { persons } = useContext(PersonContext);

  const personList = persons.map((person) => (
    <PersonDetails key={person.id} person={person} />
  ));

  return persons.length ? <ul>{personList}</ul> : 'Add people foo';
};

export default PersonList;
