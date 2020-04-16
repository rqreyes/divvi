import React, { createContext, useState } from 'react';

export const EasterEggContext = createContext();

const EasterEggProvider = (props) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const updateEasterEgg = () => setEasterEgg(!easterEgg);

  return (
    <EasterEggContext.Provider value={{ easterEgg, updateEasterEgg }}>
      {props.children}
    </EasterEggContext.Provider>
  );
};

export default EasterEggProvider;
