import React from 'react';
// import logo from './logo.svg';
import ItemContextProvider from './contexts/ItemContext';
import ItemList from './components/ItemList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <h1>divvi</h1>
      <ItemContextProvider>
        <ItemList />
      </ItemContextProvider>
    </div>
  );
}

export default App;
