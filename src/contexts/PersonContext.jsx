import React, { createContext, useState } from 'react';

export const PersonContext = createContext();

const PersonContextProvider = (props) => {
  const [persons, setPersons] = useState([
    { id: '1', name: 'marshawty', foodIds: ['1', '3'] },
    { id: '2', name: 'ranzaddy', foodIds: ['1', '2'] },
  ]);

  return (
    <PersonContext.Provider value={{ persons }}>
      {props.children}
    </PersonContext.Provider>
  );
};

export default PersonContextProvider;
