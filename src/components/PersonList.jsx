import React, { useContext } from 'react';
import { PersonContext } from '../contexts/PersonContext';
import PersonDetails from './PersonDetails';

const PersonList = () => {
  const { persons } = useContext(PersonContext);
  const personList = persons.map((person, index) =>
    index === 0 ? (
      <PersonDetails key={person.id} person={person} firstPerson={true} />
    ) : (
      <PersonDetails key={person.id} person={person} firstPerson={false} />
    )
  );

  return persons.length ? <ul>{personList}</ul> : 'Add people foo';
};

export default PersonList;
