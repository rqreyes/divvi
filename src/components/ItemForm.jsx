import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemForm = () => {
  const { addItem } = useContext(ItemContext);
  const [food, setFood] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(food, price);
    setFood('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={food}
        onChange={(e) => setFood(e.target.value)}
        required
      />
      <input
        type='number'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <button type='submit'>add</button>
    </form>
  );
};

export default ItemForm;
