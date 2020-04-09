import React from 'react';
// import logo from './logo.svg';
import ItemContextProvider from './contexts/ItemContext';
import PersonContextProvider from './contexts/PersonContext';
import CalculateProvider from './contexts/CalculateContext';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import ItemTotal from './components/ItemTotal';
import PersonList from './components/PersonList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>Divvi</h1>
      <ItemContextProvider>
        <h2>Receipt</h2>
        <section>
          <ItemList />
          <ItemForm />
          <ItemTotal />
        </section>
        <h2>People</h2>
        <section>
          <PersonContextProvider>
            <CalculateProvider>
              <PersonList />
            </CalculateProvider>
          </PersonContextProvider>
        </section>
      </ItemContextProvider>
    </div>
  );
}

export default App;
