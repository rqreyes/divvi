import React, { createContext, useState } from 'react';
import { v4 as uuidv1 } from 'uuid';

export const PersonContext = createContext();

const PersonContextProvider = (props) => {
  const [persons, setPersons] = useState([]);
  const [currPersonId, setCurrPersonId] = useState(null);

  // person constructor
  function Person() {
    this.id = uuidv1();
    this.name = '';
    this.itemIds = [];
    this.total = 0;
  }

  // person handlers
  const addPerson = () => setPersons([...persons, new Person()]);
  const removePerson = (id) =>
    setPersons(persons.filter((person) => person.id !== id));
  const updatePerson = (id, name) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === id).name = name;

    setPersons(personsCopy);
  };

  // itemIds array handlers
  const updateCurrPersonId = (id) => setCurrPersonId(id);
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
  const removePersonsItemId = (id) => {
    const personsCopy = [...persons];
    personsCopy.forEach((person) => {
      person.itemIds = person.itemIds.filter((itemId) => itemId !== id);
    });

    setPersons(personsCopy);
  };

  // person total handler
  const updatePersonTotal = (id, total) => {
    const personsCopy = [...persons];
    personsCopy.find((person) => person.id === id).total = total;

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
        removePersonsItemId,
        updatePersonTotal,
      }}
    >
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
