import React, { createContext, useState } from 'react';

export const EasterEggContext = createContext({});

const EasterEggProvider = ({ children }: JSX.ElementChildrenAttribute) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const updateEasterEgg = () => setEasterEgg(!easterEgg);

  return (
    <EasterEggContext.Provider value={{ easterEgg, updateEasterEgg }}>
      {children}
    </EasterEggContext.Provider>
  );
};

export default EasterEggProvider;
