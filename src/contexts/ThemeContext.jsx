import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState(1);
  const updateTheme = (num) => setTheme(num);

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
