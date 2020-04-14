import React, { useContext, useState } from 'react';
import { PersonContext } from '../../contexts/PersonContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const PersonForm = () => {
  const { addPerson } = useContext(PersonContext);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPerson(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Button type='submit'>add</Button>
    </form>
  );
};

export default PersonForm;
