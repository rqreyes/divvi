import React from 'react';
// import logo from './logo.svg';
import ItemContextProvider from './contexts/ItemContext';
import PersonContextProvider from './contexts/PersonContext';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import ItemTotal from './components/ItemTotal';
import PersonList from './components/PersonList';
import PersonForm from './components/PersonForm';
import AmountLeft from './components/AmountLeft';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Divvi</h1>
      <ItemContextProvider>
        <PersonContextProvider>
          <section>
            <h2>Receipt</h2>
            <ItemList />
            <ItemForm />
            <ItemTotal />
          </section>
          <section>
            <h2>People</h2>
            <PersonList />
            <PersonForm />
          </section>
          <section>
            <h2>Amount Left</h2>
            <AmountLeft />
          </section>
        </PersonContextProvider>
      </ItemContextProvider>
    </div>
  );
}

export default App;
