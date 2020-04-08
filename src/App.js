import React from 'react';
// import logo from './logo.svg';
import ItemContextProvider from './contexts/ItemContext';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>divvi</h1>
      <ItemContextProvider>
        <h2>Receipt</h2>
        <section>
          <ItemList />
          <ItemForm />
        </section>
      </ItemContextProvider>
    </div>
  );
}

export default App;
