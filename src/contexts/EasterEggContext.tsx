import React, { createContext, useState, ReactNode } from 'react';

export const EasterEggContext = createContext<EasterEggContextType | undefined>(
  undefined
);

// type properties
interface EasterEggProviderProps {
  children: ReactNode;
}

const EasterEggProvider: React.FC<EasterEggProviderProps> = ({ children }) => {
  const [easterEgg, setEasterEgg] = useState(false);
  const updateEasterEgg = () => setEasterEgg(!easterEgg);

  return (
    <EasterEggContext.Provider value={{ easterEgg, updateEasterEgg }}>
      {children}
    </EasterEggContext.Provider>
  );
};

export default EasterEggProvider;
