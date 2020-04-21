import React, { useContext, useState } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
        type='text'
        placeholder='Enter Item'
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />
      <Input
        type='number'
        step='0.01'
        min='0'
        placeholder='Enter Price'
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button className='action' type='submit'>
        <FontAwesomeIcon className='add-icon' icon={faPlusCircle} />
      </Button>
    </form>
  );
};

export default ItemForm;
