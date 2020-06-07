import React, { createContext, useState, ReactNode } from 'react';

export const EasterEggContext = createContext<iEasterEggContext | undefined>(
  undefined
);

// interface properties
interface iEasterEggProviderProps {
  children: ReactNode;
}

const EasterEggProvider: React.FC<iEasterEggProviderProps> = ({ children }) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const updateEasterEgg = () => setEasterEgg(!easterEgg);

  return (
    <EasterEggContext.Provider value={{ easterEgg, updateEasterEgg }}>
      {children}
    </EasterEggContext.Provider>
  );
};

export default EasterEggProvider;
