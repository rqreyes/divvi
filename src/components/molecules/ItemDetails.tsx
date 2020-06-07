import React, { useContext, ChangeEvent } from 'react';
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

// interface properties
interface iItemDetailsProps {
  item: iItem;
  currItemChecked: boolean;
}

const ItemDetails: React.FC<iItemDetailsProps> = ({
  item,
  currItemChecked,
}) => {
  const {
    items,
    removeItem,
    updateFood,
    updatePrice,
    addCurrItemPersonId,
    removeCurrItemPersonId,
  } = useContext(ItemContext)!;
  const {
    currPersonId,
    addCurrPersonItemId,
    removeCurrPersonItemId,
    removePersonsItemId,
  } = useContext(PersonContext)!;

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
  // then add the item-left class
  const itemLeft = item.personIds.length ? '' : 'item-left';

  // if there is a current person selected
  // then display the checkboxes
  const display = currPersonId ? '' : 'hide';

  // if the current item is checked
  // then display the checked icon
  const checkboxButton = currItemChecked ? (
    <Button
      className={`action ${display}`}
      type='button'
      onClick={removeCurrIds}
    >
      <FontAwesomeIcon icon={faCheckCircle} />
    </Button>
  ) : (
    <Button className={`action ${display}`} type='button' onClick={addCurrIds}>
      <FontAwesomeIcon icon={faCircle} />
    </Button>
  );

  return (
    <li className={itemLeft}>
      {checkboxButton}
      <Input
        type='text'
        placeholder='Enter Item'
        value={item.food}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updateFood(item.id, e.currentTarget.value)
        }
        autoFocus={item !== items[0]}
      />
      <Input
        type='number'
        placeholder='Enter Price'
        step='0.01'
        min='0'
        value={item.price}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          updatePrice(item.id, e.currentTarget.value)
        }
        onBlur={() =>
          updatePrice(
            item.id,
            item.price ? parseFloat(item.price).toFixed(2) : ''
          )
        }
      />
      <Button className='action' type='button' onClick={removeItemIds}>
        <FontAwesomeIcon className='remove-icon' icon={faMinusCircle} />
      </Button>
    </li>
  );
};

export default ItemDetails;
