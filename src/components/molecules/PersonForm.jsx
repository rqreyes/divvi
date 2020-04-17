import React, { useContext, useState } from 'react';
import { PersonContext } from '../../contexts/PersonContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

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
        placeholder='Enter Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button className={'action'} type='submit'>
        <FontAwesomeIcon className='add-icon' icon={faPlusCircle} />
      </Button>
    </form>
  );
};

export default PersonForm;
