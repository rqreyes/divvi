import React, { Fragment, useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import ItemDetails from '../molecules/ItemDetails';

const ItemList = () => {
  const { items } = useContext(ItemContext);
  const { persons, currPersonId } = useContext(PersonContext);

  // if a person is selected, then display their name and retrieve their details
  let selectItems = '';
  let currPersonDetails = '';

  if (currPersonId) {
    selectItems = '';
    currPersonDetails = persons.find((person) => person.id === currPersonId);
  } else {
    selectItems = 'none';
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
      <p className={selectItems}>Selecting for {currPersonDetails.name}</p>
      <ul className='item-list'>{itemList}</ul>
    </Fragment>
  );
};

export default ItemList;
