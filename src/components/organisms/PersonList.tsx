import React, { useContext } from 'react';
import { PersonContext } from '../../contexts/PersonContext';
import PersonDetails from '../molecules/PersonDetails';
import Button from '../atoms/Button';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const PersonList = () => {
  const { persons, addPerson } = useContext(PersonContext)!;

  const personList = persons.map((person) => (
    <PersonDetails key={`person-details-${person.id}`} person={person} />
  ));

  return (
    <section className='people' data-tut='reactour__people'>
      <Element name='peopleAnchor' />
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faUserFriends} />
      </div>
      <h2>People</h2>
      <ul>{personList}</ul>
      <Button className='action add-icon' type='button' onClick={addPerson}>
        <FontAwesomeIcon className='add-icon' icon={faPlusCircle} />
      </Button>
    </section>
  );
};

export default PersonList;
