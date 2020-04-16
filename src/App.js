import React, { useState } from 'react';
import ThemeContextProvider from './contexts/ThemeContext';
import ItemContextProvider from './contexts/ItemContext';
import PersonContextProvider from './contexts/PersonContext';
import Header from './components/organisms/Header';
import ItemList from './components/organisms/ItemList';
import PersonList from './components/organisms/PersonList';
import AmountLeft from './components/organisms/AmountLeft';
import About from './components/organisms/About';
import ItemForm from './components/molecules/ItemForm';
import ItemTotal from './components/molecules/ItemTotal';
import PersonForm from './components/molecules/PersonForm';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faUserFriends,
  faCommentsDollar,
  faUserAstronaut,
} from '@fortawesome/free-solid-svg-icons';
import './styles/styles.scss';

function App() {
  const [theme, setTheme] = useState(true);
  const updateTheme = () => setTheme(!theme);
  const themeDisplay = theme ? '1' : '2';

  return (
    <ThemeContextProvider>
      <div className={`App theme-${themeDisplay}`}>
        <ItemContextProvider>
          <PersonContextProvider>
            <section className='header'>
              <Header updateTheme={updateTheme} />
            </section>
            <section className='receipt'>
              <Element name='receiptAnchor' />
              <div className='heading-icon'>
                <FontAwesomeIcon icon={faUtensils} />
              </div>
              <ItemList />
              <ItemForm />
              <ItemTotal />
            </section>
            <section className='people'>
              <Element name='peopleAnchor' />
              <div className='heading-icon'>
                <FontAwesomeIcon icon={faUserFriends} />
              </div>
              <h2>People</h2>
              <PersonList />
              <PersonForm />
            </section>
            <section className='amount-left'>
              <div className='heading-icon'>
                <FontAwesomeIcon icon={faCommentsDollar} />
              </div>
              <h2>Amount Left</h2>
              <AmountLeft />
            </section>
            <section className='about'>
              <div className='heading-icon'>
                <FontAwesomeIcon icon={faUserAstronaut} />
              </div>
              <About />
            </section>
          </PersonContextProvider>
        </ItemContextProvider>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
