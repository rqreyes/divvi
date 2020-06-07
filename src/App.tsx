import React, { useState } from 'react';
import EasterEggContextProvider from './contexts/EasterEggContext';
import ItemContextProvider from './contexts/ItemContext';
import PersonContextProvider from './contexts/PersonContext';
import EasterEgg from './components/organisms/EasterEgg';
import Header from './components/organisms/Header';
import ItemList from './components/organisms/ItemList';
import PersonList from './components/organisms/PersonList';
import Summary from './components/organisms/Summary';
import About from './components/organisms/About';
import Difference from './components/organisms/Difference';
import './styles/styles.scss';

function App() {
  // toggle the background
  const [theme, setTheme] = useState(true);
  const updateTheme: iUpdateTheme = () => setTheme(!theme);
  const themeDisplay = theme ? '1' : '2';

  return (
    <div className={`App theme-${themeDisplay}`}>
      <EasterEggContextProvider>
        <EasterEgg />
        <ItemContextProvider>
          <PersonContextProvider>
            <Header updateTheme={updateTheme} />
            <ItemList />
            <PersonList />
            <Summary />
            <About />
            <Difference />
          </PersonContextProvider>
        </ItemContextProvider>
      </EasterEggContextProvider>
    </div>
  );
}

export default App;
