import React, { useContext, useState, useRef, useEffect } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import ItemLeft from '../molecules/ItemLeft';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentsDollar,
  faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

const Amount = () => {
  const { items, total } = useContext(ItemContext)!;
  const { persons } = useContext(PersonContext)!;
  const [active, setActive] = useState(false);
  const itemListLeftRef = useRef<HTMLDivElement | null>(null);

  // calculate the contributions
  const personsTotal = persons.reduce((total, person) => {
    return (total += person.total);
  }, 0);

  // calculate the amount left
  const amountLeft = total - personsTotal;
  const amountLeftFixed =
    amountLeft.toFixed(2) === '-0.00' ? '0.00' : amountLeft.toFixed(2);
  const differenceDisplay =
    amountLeftFixed !== '0.00' ? 'difference-display' : '';

  // toggle the items left
  const toggleActive = () => {
    setActive(!active);
  };

  const activeDisplay = active ? 'active' : '';

  // display the items left
  const itemListLeft = items
    .filter((item) => item.personIds.length === 0)
    .map((item) => <ItemLeft key={`item-left-${item.id}`} item={item} />);

  // update the height of accordion content
  useEffect(() => {
    if (itemListLeftRef && itemListLeftRef.current) {
      itemListLeftRef.current.style.maxHeight = active
        ? `${itemListLeftRef.current.scrollHeight}px`
        : '0px';
    }
  }, [items, active, itemListLeftRef]);

  return (
    <section className='amount-left' data-tut='reactour__amountLeft'>
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faCommentsDollar} />
      </div>
      <h2>Amount Left</h2>
      <div className='difference-stats'>
        <p>
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </p>
        <p>
          <span>Contributions</span>
          <span>${personsTotal.toFixed(2)}</span>
        </p>
      </div>
      <div className='amount-left-fixed'>
        <div className='difference-container'>
          <Button
            className={`accordion-icon action ${activeDisplay}`}
            type='button'
            onClick={toggleActive}
            data-tut='reactour__amountDropdown'
          >
            <FontAwesomeIcon icon={faChevronCircleRight} />
          </Button>
          <p className={`difference ${differenceDisplay}`}>
            <strong>Difference</strong>
            <strong>${amountLeftFixed}</strong>
          </p>
        </div>
        <div className='items-left'>
          <div className='accordion-content' ref={itemListLeftRef}>
            <ul>{itemListLeft}</ul>
            <p>
              <strong>Items Left</strong>
              <strong>{itemListLeft.length}</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amount;
