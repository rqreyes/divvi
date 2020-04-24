import React, { useContext, useState, useRef, useEffect } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import ItemLeft from '../molecules/ItemLeft';
import Button from '../atoms/Button';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentsDollar,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

// accordion styles
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
      transition: transform 0.8s;
    `}
  ${({ active }) =>
    active &&
    css`
      transform: rotate(90deg);
    `}
`;

const Amount = () => {
  const { items, total } = useContext(ItemContext);
  const { persons } = useContext(PersonContext);
  const [active, setActive] = useState(false);
  const itemListLeftRef = useRef(null);

  // calculate the contributions
  const personsTotal = persons.reduce((total, person) => {
    return (total += person.total);
  }, 0);

  // calculate the amount left
  const amountLeftFixed = (total - personsTotal).toFixed(2);
  const amountLeft =
    amountLeftFixed === '-0.00' || amountLeftFixed === '0.00'
      ? 0
      : amountLeftFixed;
  const differenceDisplay = amountLeft ? 'difference-display' : '';

  // toggle the person's receipt
  const toggleActive = () => {
    setActive(!active);
  };

  // display the items left
  const itemListLeft = items
    .filter((item) => item.personIds.length === 0)
    .map((item) => <ItemLeft key={`item-left-${item.id}`} item={item} />);

  // update the height of accordion content
  useEffect(() => {
    itemListLeftRef.current.style.maxHeight = active
      ? `${itemListLeftRef.current.scrollHeight}px`
      : '0px';
  }, [items, active, itemListLeftRef]);

  return (
    <section className='amount-left'>
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faCommentsDollar} />
      </div>
      <h2>Amount Left</h2>
      <p>
        <span>Total</span>
        <span>${total.toFixed(2)}</span>
      </p>
      <p>
        <span>Contributions</span>
        <span>${personsTotal.toFixed(2)}</span>
      </p>
      <div className='difference-container'>
        <Div className='accordion-icon' accordionIcon active={active}>
          <Button className='action' type='button' onClick={toggleActive}>
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </Button>
        </Div>
        <p className={`difference ${differenceDisplay}`}>
          <strong>Difference</strong>
          <strong>${amountLeftFixed}</strong>
        </p>
      </div>
      <div className='items-left'>
        <Div accordionContent ref={itemListLeftRef}>
          <ul>{itemListLeft}</ul>
          <p>
            <strong>Items Left</strong>
            <strong>{itemListLeft.length}</strong>
          </p>
        </Div>
      </div>
    </section>
  );
};

export default Amount;
