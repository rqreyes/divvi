import React from 'react';
// import logo from './logo.svg';
import ItemContextProvider from './contexts/ItemContext';
import PersonContextProvider from './contexts/PersonContext';
import ItemList from './components/organisms/ItemList';
import PersonList from './components/organisms/PersonList';
import AmountLeft from './components/organisms/AmountLeft';
import ItemForm from './components/molecules/ItemForm';
import ItemTotal from './components/molecules/ItemTotal';
import PersonForm from './components/molecules/PersonForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUtensils,
  faUserFriends,
  faCommentsDollar,
} from '@fortawesome/free-solid-svg-icons';
import './styles/styles.scss';

function App() {
  return (
    <div className='App'>
      <ItemContextProvider>
        <PersonContextProvider>
          <h1 className='section-bg'>Divvi</h1>
          <section className='section-bg receipt'>
            <div className='heading-icon'>
              <FontAwesomeIcon icon={faUtensils} />
            </div>
            <h2>Receipt</h2>
            <ItemList />
            <ItemForm />
            <ItemTotal />
          </section>
          <section className='section-bg people'>
            <div className='heading-icon'>
              <FontAwesomeIcon icon={faUserFriends} />
            </div>
            <h2>People</h2>
            <PersonList />
            <PersonForm />
          </section>
          <section className='section-bg amount-left'>
            <div className='heading-icon'>
              <FontAwesomeIcon icon={faCommentsDollar} />
            </div>
            <h2>Amount Left</h2>
            <AmountLeft />
          </section>
        </PersonContextProvider>
      </ItemContextProvider>
    </div>
  );
}

export default App;
