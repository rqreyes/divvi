import React, {
  useContext,
  useState,
  useRef,
  useEffect,
  ChangeEvent,
} from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import PersonItemDetails from './PersonItemDetails';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronCircleRight,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

// type properties
interface PersonDetailsProps {
  person: PersonType;
}

const PersonDetails: React.FC<PersonDetailsProps> = ({ person }) => {
  const { items, subtotal, tax, tip, removeItemsPersonId } = useContext(
    ItemContext
  )!;
  const {
    persons,
    removePerson,
    updatePerson,
    currPersonId,
    updateCurrPersonId,
    updatePersonTotal,
  } = useContext(PersonContext)!;
  const [active, setActive] = useState(false);
  const personReceiptRef = useRef<HTMLDivElement | null>(null);

  // remove the person from the persons array
  // remove the person id from all item personIds array
  const removePersonIds = () => {
    removePerson(person.id);
    removeItemsPersonId(person.id);
  };

  // find the item object based on the item's id
  const findItemDetails = (itemId: string) =>
    items.find((item) => item.id === itemId)!;

  // create an array of each item's price
  const personItemPrices = person.itemIds.map((itemId) => {
    const itemDetails = findItemDetails(itemId);
    const checkFloat = (itemDetails.splitPrice * 100) % 1;
    const priceInt = Math.floor(itemDetails.splitPrice * 100);

    // if the price a whole number, if the person is not first, and if there's more than one person
    // then add 0.01 to the first person's subtotal
    return checkFloat &&
      person.id !== itemDetails.personIds[0] &&
      itemDetails.personIds.length > 1
      ? priceInt / 100 + 0.01
      : priceInt / 100;
  });

  // create an array of item details and pass in item's modified price
  const personItemList = person.itemIds.map((itemId, index) => {
    const itemDetails = findItemDetails(itemId);

    return (
      <PersonItemDetails
        key={`person-item-details-${itemId}`}
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
  const personTax = tax
    ? (personSubtotal / subtotal || 0) * parseFloat(tax)
    : 0;
  const personTip = tip
    ? (personSubtotal / subtotal || 0) * parseFloat(tip)
    : 0;
  const personTotal = personSubtotal + personTax + personTip;

  // if the current person matches with the current person's id
  // then display the done button
  // else display the select items button
  const selectItems =
    currPersonId === person.id ? (
      <Button
        className='primary'
        type='button'
        onClick={() => updateCurrPersonId('')}
      >
        Done
      </Button>
    ) : (
      <Button
        className={`primary`}
        type='button'
        onClick={() => {
          scroller.scrollTo('receiptAnchor', {
            smooth: true,
            offset: -50,
          });
          updateCurrPersonId(person.id);
        }}
      >
        Select Items
      </Button>
    );

  // toggle the person's receipt
  const toggleActive = () => {
    setActive(!active);
  };

  const activeDisplay = active ? 'active' : '';

  // if the calculated person's total is different than the current person's total
  // then update the person's total
  useEffect(() => {
    if (personTotal !== person.total) {
      updatePersonTotal(person.id, personTotal);
    }
  }, [personTotal, person.total, updatePersonTotal, person.id]);

  // update the height of accordion content
  useEffect(() => {
    if (personReceiptRef && personReceiptRef.current) {
      personReceiptRef.current.style.maxHeight = active
        ? `${personReceiptRef.current.scrollHeight}px`
        : '0px';
    }
  }, [items, active, personReceiptRef]);

  return (
    <li className='person-details'>
      <div className='person-name'>
        <Button
          className={`accordion-icon action ${activeDisplay}`}
          type='button'
          onClick={toggleActive}
        >
          <FontAwesomeIcon icon={faChevronCircleRight} />
        </Button>
        <Input
          type='text'
          placeholder='Enter Name'
          value={person.name}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            updatePerson(person.id, e.target.value)
          }
          autoFocus={person !== persons[0]}
        />
        <Button
          className='action'
          type='button'
          onClick={() => removePersonIds()}
        >
          <FontAwesomeIcon className='remove-icon' icon={faMinusCircle} />
        </Button>
      </div>
      <div className='person-total'>
        <div className='accordion-content' ref={personReceiptRef}>
          <ul>{personItemList}</ul>
          <p>
            <strong>Subtotal</strong>
            <strong>${personSubtotal.toFixed(2)}</strong>
          </p>
          <p>
            <span>Tax</span>
            <span>${personTax.toFixed(2)}</span>
          </p>
          <p>
            <span>Tip</span>
            <span>${personTip.toFixed(2)}</span>
          </p>
        </div>
        <p className='total'>
          <strong>Total</strong>
          <strong>${personTotal.toFixed(2)}</strong>
        </p>
        {selectItems}
      </div>
    </li>
  );
};

export default PersonDetails;
