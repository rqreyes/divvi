import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import ItemDetails from '../molecules/ItemDetails';
import ItemTotal from '../molecules/ItemTotal';
import Button from '../atoms/Button';
import { Element, scroller } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const ItemList = () => {
  const { items, addItem } = useContext(ItemContext)!;
  const { persons, currPersonId, setCurrPersonId } = useContext(PersonContext)!;

  // if a person is selected, then display their name and retrieve their details
  let currPersonDetails: PersonType;
  let selectItemsDisplay: JSX.Element;

  if (currPersonId) {
    currPersonDetails = persons.find((person) => person.id === currPersonId)!;
    selectItemsDisplay = (
      <div className={`select-items`}>
        <p>
          Selecting for <strong>{currPersonDetails.name}</strong>
        </p>
        <Button
          className='primary'
          type='button'
          onClick={() => {
            scroller.scrollTo('peopleAnchor', {
              smooth: true,
              offset: -50,
            });
            setCurrPersonId('');
          }}
        >
          Done
        </Button>
      </div>
    );
  } else {
    selectItemsDisplay = <h2>Receipt</h2>;
  }

  const itemList = items.map((item) => {
    // if a person is selected, then display which items are checked
    if (currPersonId) {
      const currItemChecked = currPersonDetails.itemIds.includes(item.id);

      return (
        <ItemDetails
          key={`item-details-${item.id}`}
          item={item}
          currItemChecked={currItemChecked}
        />
      );
    } else {
      return (
        <ItemDetails
          key={`item-details-${item.id}`}
          item={item}
          currItemChecked={false}
        />
      );
    }
  });

  return (
    <section className='receipt'>
      <Element name='receiptAnchor' />
      <div className='heading-icon'>
        <FontAwesomeIcon icon={faUtensils} />
      </div>
      {selectItemsDisplay}
      <ul className='item-list'>{itemList}</ul>
      <Button className='action add-icon' type='button' onClick={addItem}>
        <FontAwesomeIcon className='add-icon' icon={faPlusCircle} />
      </Button>
      <ItemTotal />
    </section>
  );
};

export default ItemList;
