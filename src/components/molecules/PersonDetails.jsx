import React, { useContext, useState, useRef, useEffect } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import PersonItemDetails from './PersonItemDetails';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import styled, { css } from 'styled-components';

// styles
const Div = styled.div`
  ${({ accordionContent }) =>
    accordionContent &&
    css`
      overflow: hidden;
      transition: max-height 0.8s;
    `};
  ${({ accordionIcon }) =>
    accordionIcon &&
    css`
      display: block;
      transition: transform 0.8s;
    `}
  ${({ active }) =>
    active &&
    css`
      transform: rotate(90deg);
    `}
`;

const PersonDetails = ({ person }) => {
  const { items, subtotal, tax, tip } = useContext(ItemContext);
  const {
    removePerson,
    updatePerson,
    updateCurrPersonId,
    updatePersonTotal,
  } = useContext(PersonContext);
  const [active, setActive] = useState(false);
  const personReceipt = useRef();

  // find the item object based on the item's id
  const findItemDetails = (itemId) => items.find((item) => item.id === itemId);

  // create an array of each item's price
  const personItemPrices = person.itemIds.map((itemId) => {
    const itemDetails = findItemDetails(itemId);
    const checkFloat = (itemDetails.splitPrice * 100) % 1;
    const priceInt = Math.floor(itemDetails.splitPrice * 100);

    // if the price a whole number, if the person is first, and if there's more than one person
    // then add 0.01 to the first person's subtotal
    return checkFloat &&
      person.id === itemDetails.personIds[0] &&
      itemDetails.personIds.length > 1
      ? priceInt / 100 + 0.01
      : priceInt / 100;
  });

  // create an array of item details and pass in item's modified price
  const personItemList = person.itemIds.map((itemId, index) => {
    const itemDetails = findItemDetails(itemId);

    return (
      <PersonItemDetails
        key={itemId}
        itemDetails={itemDetails}
        splitPrice={personItemPrices[index]}
      />
    );
  });

  // calculate the total
  const personSubtotal = personItemPrices.reduce(
    (sum, price) => (sum += price),
    0
  );
  const personTax = tax ? (personSubtotal / subtotal) * tax : 0;
  const personTip = tip ? (personSubtotal / subtotal) * tip : 0;
  const personTotal = personSubtotal + personTax + personTip;

  // toggle the person's receipt
  const toggleActive = () => {
    setActive(!active);
  };

  // if the calculated person's total is different than the current person's total
  // then update the person's total
  useEffect(() => {
    if (personTotal !== person.total) {
      updatePersonTotal(person.id, personTotal);
    }
  }, [personTotal, person.total, updatePersonTotal, person.id]);

  // update the height of accordion content
  useEffect(() => {
    personReceipt.current.style.maxHeight = active
      ? `${personReceipt.current.scrollHeight}px`
      : '0px';
  }, [active, personReceipt]);

  return (
    <li>
      <div>
        <Button type='button' onClick={toggleActive}>
          <Div accordionIcon active={active}>
            >
          </Div>
        </Button>
        <Input
          type='text'
          value={person.name}
          onChange={(e) => updatePerson(person.id, e.target.value)}
        />
        <Button type='button' onClick={() => removePerson(person.id)}>
          remove
        </Button>
      </div>
      <div>
        <Div accordionContent ref={personReceipt}>
          <ul>{personItemList}</ul>
          <p>Subtotal: {personSubtotal.toFixed(2)}</p>
          <p>Tax: {personTax.toFixed(2)}</p>
          <p>Tip: {personTip.toFixed(2)}</p>
        </Div>
        <p>Total: {personTotal.toFixed(2)}</p>
        <Button type='button' onClick={() => updateCurrPersonId(person.id)}>
          select food items
        </Button>
        <Button type='button' onClick={() => updateCurrPersonId(null)}>
          done
        </Button>
      </div>
    </li>
  );
};

export default PersonDetails;
