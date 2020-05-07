import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import SummaryPerson from '../molecules/SummaryPerson';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

const Amount = () => {
  const { itemsTotal } = useContext(ItemContext)!;
  const { persons, personsTotal } = useContext(PersonContext)!;

  const summaryPersonsList = persons.map((person) => {
    return (
      <SummaryPerson key={`summary-person-${person.id}`} person={person} />
    );
  });

  return (
    <section className='summary'>
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faCommentsDollar} />
      </div>
      <h2>Summary</h2>
      <div className='stats'>
        <ul>{summaryPersonsList}</ul>
        <ul>
          <li>
            <strong>Contributions</strong>
            <strong>${personsTotal.toFixed(2)}</strong>
          </li>
          <li>
            <strong>Total</strong>
            <strong>${itemsTotal.toFixed(2)}</strong>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Amount;
