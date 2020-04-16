import React, { useState } from 'react';
import ItemContextProvider from './contexts/ItemContext';
import PersonContextProvider from './contexts/PersonContext';
import Header from './components/organisms/Header';
import ItemList from './components/organisms/ItemList';
import PersonList from './components/organisms/PersonList';
import AmountLeft from './components/organisms/AmountLeft';
import About from './components/organisms/About';
import './styles/styles.scss';

function App() {
  const [theme, setTheme] = useState(true);
  const updateTheme = () => setTheme(!theme);
  const themeDisplay = theme ? '1' : '2';

  return (
    <div className={`App theme-${themeDisplay}`}>
      <ItemContextProvider>
        <PersonContextProvider>
          <Header updateTheme={updateTheme} />
          <ItemList />
          <PersonList />
          <AmountLeft />
          <About />
        </PersonContextProvider>
      </ItemContextProvider>
    </div>
  );
}

export default App;
