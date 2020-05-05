import React, { useContext, useState, useRef, useEffect } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import ItemLeft from '../molecules/ItemLeft';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';

// type properties
interface DifferenceProps {
  personsTotal: number;
}

const Difference: React.FC<DifferenceProps> = ({ personsTotal }) => {
  const { items, total } = useContext(ItemContext)!;
  const [active, setActive] = useState(false);
  const itemListLeftRef = useRef<HTMLDivElement | null>(null);

  // calculate the amount left
  const difference = total - personsTotal;
  const differenceFixed =
    difference.toFixed(2) === '-0.00' ? '0.00' : difference.toFixed(2);
  const differenceDisplay =
    differenceFixed !== '0.00' ? 'difference-display' : '';

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
    <div className='difference' data-tut='reactour__difference'>
      <div className='difference-container'>
        <Button
          className={`accordion-icon action ${activeDisplay}`}
          type='button'
          onClick={toggleActive}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </Button>
        <p className={`difference-content ${differenceDisplay}`}>
          <strong>Difference</strong>
          <strong>${differenceFixed}</strong>
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
  );
};

export default Difference;
