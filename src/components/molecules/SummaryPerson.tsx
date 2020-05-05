import React from 'react';

interface SummaryPersonProps {
  person: PersonType;
}

const SummaryPerson: React.FC<SummaryPersonProps> = ({ person }) => {
  return (
    <li>
      <span>{person.name || 'Unknown'}</span>
      <span>${person.total.toFixed(2)}</span>
    </li>
  );
};

export default SummaryPerson;
