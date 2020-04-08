import React from 'react';
// import logo from './logo.svg';
import ItemContextProvider from './contexts/ItemContext';
import ItemList from './components/ItemList';
import ItemForm from './components/ItemForm';
import './App.css';
import ItemTotal from './components/ItemTotal';

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
      </ItemContextProvider>
    </div>
  );
}

export default App;
