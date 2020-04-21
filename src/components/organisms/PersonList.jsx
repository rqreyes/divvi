import React, { useContext } from 'react';
import { PersonContext } from '../../contexts/PersonContext';
import PersonDetails from '../molecules/PersonDetails';
import PersonForm from '../molecules/PersonForm';
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';

const PersonList = () => {
  const { persons } = useContext(PersonContext);

  const personList = persons.map((person) => (
    <PersonDetails key={`person-details-${person.id}`} person={person} />
  ));

  return (
    <section className='people'>
      <Element name='peopleAnchor' />
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faUserFriends} />
      </div>
      <h2>People</h2>
      <ul>{personList}</ul>
      <PersonForm />
    </section>
  );
};

export default PersonList;
