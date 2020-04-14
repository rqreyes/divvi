import React, { useContext, useState } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

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
      <Input
        type={'text'}
        placeholder='Enter Item'
        value={food}
        onChange={(e) => setFood(e.target.value)}
        required
      />
      <Input
        type={'number'}
        placeholder='Enter Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <Button className='add' type={'submit'}>
        add
      </Button>
    </form>
  );
};

export default ItemForm;