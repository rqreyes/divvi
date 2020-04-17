import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faCheckCircle,
  faMinusCircle,
} from '@fortawesome/free-solid-svg-icons';

const ItemDetails = ({ item, currItemChecked }) => {
  const {
    removeItem,
    updateFood,
    updatePrice,
    addCurrItemPersonId,
    removeCurrItemPersonId,
  } = useContext(ItemContext);
  const {
    currPersonId,
    addCurrPersonItemId,
    removeCurrPersonItemId,
    removePersonsItemId,
  } = useContext(PersonContext);

  // add / remove the item id to person's itemIds array
  // add / remove the person id to item's personIds array
  const addCurrIds = () => {
    addCurrItemPersonId(item.id, currPersonId);
    addCurrPersonItemId(item.id);
  };
  const removeCurrIds = () => {
    removeCurrItemPersonId(item.id, currPersonId);
    removeCurrPersonItemId(item.id);
  };

  // remove the item from the items array
  // remove the item id from all person itemIds array
  const removeItemIds = () => {
    removeItem(item.id);
    removePersonsItemId(item.id);
  };

  // if the item has not been selected by a person
  // then add the item-unselected class
  const itemUnselected = item.personIds.length ? '' : 'item-unselected';

  // if there is a current person selected
  // then display the checkboxes
  const display = currPersonId ? '' : 'hide';

  // if the current item is checked
  // then display the checked icon
  const checkboxButton = currItemChecked ? (
    <Button className={`action ${display}`} onClick={removeCurrIds}>
      <FontAwesomeIcon icon={faCheckCircle} />
    </Button>
  ) : (
    <Button className={`action ${display}`} onClick={addCurrIds}>
      <FontAwesomeIcon icon={faCircle} />
    </Button>
  );

  return (
    <li className={itemUnselected}>
      {checkboxButton}
      <form>
        <Input
          type='text'
          value={item.food}
          onChange={(e) => updateFood(item.id, e.target.value)}
        />
        <Input
          type='number'
          step='0.01'
          min='0'
          value={item.price}
          onChange={(e) => updatePrice(item.id, e.target.value)}
        />
      </form>
      <Button className='action' type='button' onClick={removeItemIds}>
        <FontAwesomeIcon className='remove-icon' icon={faMinusCircle} />
      </Button>
    </li>
  );
};

export default ItemDetails;
