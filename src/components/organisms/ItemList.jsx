import React, { Fragment, useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import ItemDetails from '../molecules/ItemDetails';
import Button from '../atoms/Button';
import { scroller } from 'react-scroll';

const ItemList = () => {
  const { items } = useContext(ItemContext);
  const { persons, currPersonId, updateCurrPersonId } = useContext(
    PersonContext
  );

  // if a person is selected, then display their name and retrieve their details
  let currPersonDetails = null;
  let selectItemsDisplay = null;

  if (currPersonId) {
    currPersonDetails = persons.find((person) => person.id === currPersonId);
    selectItemsDisplay = (
      <div className={`select-items`}>
        <p>Selecting for {currPersonDetails.name}</p>
        <Button
          className='primary'
          type='button'
          onClick={() => {
            scroller.scrollTo('peopleAnchor', {
              smooth: true,
              offset: -60,
            });
            updateCurrPersonId(null);
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
          key={item.id}
          item={item}
          currItemChecked={currItemChecked}
        />
      );
    } else {
      return <ItemDetails key={item.id} item={item} currItemChecked={false} />;
    }
  });

  return (
    <Fragment>
      {selectItemsDisplay}
      <ul className='item-list'>{itemList}</ul>
    </Fragment>
  );
};

export default ItemList;
