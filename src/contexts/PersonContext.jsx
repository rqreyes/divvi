import React, { createContext, useState } from 'react';

export const PersonContext = createContext();

const PersonContextProvider = (props) => {
  const [persons, setPersons] = useState([
    {
      id: '1',
      name: 'marshawty',
    },
    {
      id: '2',
      name: 'ranzaddy',
    },
  ]);

  return (
    <PersonContext.Provider value={{ persons }}>
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
