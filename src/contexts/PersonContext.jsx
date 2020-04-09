import React, { createContext, useState } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const PersonContext = createContext();

const PersonContextProvider = (props) => {
  const [persons, setPersons] = useState([
    {
      id: '1',
      name: 'marshawty',
      itemIds: ['1', '3'],
    },
    {
      id: '2',
      name: 'ranzaddy',
      itemIds: ['1', '2'],
    },
  ]);
  const [currPersonId, setCurrPersonId] = useState(null);

  // person constructor
  function Person(name) {
    this.id = uuidv1();
    this.name = name;
    this.itemIds = [];
  }

  // person handlers
  const addPerson = (name) => {
    setPersons([...persons, new Person(name)]);
  };
  const removePerson = (id) => {
    setPersons(persons.filter((person) => person.id !== id));
  };
  const updatePerson = (id, name) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === id).name = name;

    setPersons(personsCopy);
  };
  const updateCurrPersonId = (id) => {
    setCurrPersonId(id);
  };
  const addCurrPersonItemId = (id) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === currPersonId).itemIds.push(id);

    setPersons(personsCopy);
  };
  const removeCurrPersonItemId = (id) => {
    const personsCopy = [...persons];
    const currPersonDetails = personsCopy.find(
      (person) => person.id === currPersonId
    );
    currPersonDetails.itemIds = currPersonDetails.itemIds.filter(
      (itemId) => itemId !== id
    );

    setPersons(personsCopy);
  };
  const removeAllPersonItemId = (id) => {
    const personsCopy = [...persons];
    personsCopy.forEach((person) => {
      person.itemIds = person.itemIds.filter((itemId) => itemId !== id);
    });

    setPersons(personsCopy);
  };

  return (
    <PersonContext.Provider
      value={{
        persons,
        addPerson,
        removePerson,
        updatePerson,
        currPersonId,
        updateCurrPersonId,
        addCurrPersonItemId,
        removeCurrPersonItemId,
        removeAllPersonItemId,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
