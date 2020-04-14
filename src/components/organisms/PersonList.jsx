import React, { useContext } from 'react';
import { PersonContext } from '../../contexts/PersonContext';
import PersonDetails from '../molecules/PersonDetails';

const PersonList = () => {
  const { persons } = useContext(PersonContext);

  const personList = persons.map((person) => (
    <PersonDetails key={person.id} person={person} />
  ));

  return <ul>{personList}</ul>;
};

export default PersonList;
