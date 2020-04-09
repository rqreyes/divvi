import React, { useContext, useState } from 'react';
import { PersonContext } from '../contexts/PersonContext';

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
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <button type='submit'>add</button>
    </form>
  );
};

export default PersonForm;
