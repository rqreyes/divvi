import React from 'react';
// import logo from './logo.svg';
import ItemContextProvider from './contexts/ItemContext';
import PersonContextProvider from './contexts/PersonContext';
import H1 from './components/atoms/H1';
import H2 from './components/atoms/H2';
import ItemList from './components/organisms/ItemList';
import ItemForm from './components/molecules/ItemForm';
import PersonList from './components/organisms/PersonList';
import PersonForm from './components/molecules/PersonForm';
import AmountLeft from './components/organisms/AmountLeft';
import './App.css';

function App() {
  return (
    <div className='App'>
      <ItemContextProvider>
        <PersonContextProvider>
          <H1>Divvi</H1>
          <section>
            <H2>Receipt</H2>
            <ItemList />
            <ItemForm />
          </section>
          <section>
            <H2>People</H2>
            <PersonList />
            <PersonForm />
          </section>
          <section>
            <H2>Amount Left</H2>
            <AmountLeft />
          </section>
        </PersonContextProvider>
      </ItemContextProvider>
    </div>
  );
}

export default App;
