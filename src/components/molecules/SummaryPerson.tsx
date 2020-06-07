import React from 'react';

// interface properties
interface iSummaryPersonProps {
  person: iPerson;
}

const SummaryPerson: React.FC<iSummaryPersonProps> = ({ person }) => {
  return (
    <li>
      <span>{person.name || 'Unknown Name'}</span>
      <span>${person.total.toFixed(2)}</span>
    </li>
  );
};

export default SummaryPerson;
