import React, { useState, useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemForm = () => {
  const { addItem } = useContext(ItemContext);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addItem(name, price);
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type='number'
        value={price}
        onChange={e => setPrice(e.target.value)}
        required
      />
      <button type='submit'>add</button>
    </form>
  );
};

export default ItemForm;
