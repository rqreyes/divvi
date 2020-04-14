import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import { PersonContext } from '../../contexts/PersonContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

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

  let className = '';
  if (!currPersonId) className += 'hide';

  return (
    <li>
      <Input
        className={className}
        type={'checkbox'}
        checked={currItemChecked}
        onChange={(e) => {
          if (e.target.checked) addCurrIds();
          else removeCurrIds();
        }}
      />
      <Input
        type={'text'}
        value={item.food}
        onChange={(e) => updateFood(item.id, e.target.value)}
      />
      <Input
        type={'number'}
        value={item.price}
        onChange={(e) => updatePrice(item.id, e.target.value)}
      />
      <Button type={'button'} onClick={() => removeItemIds()}>
        remove
      </Button>
    </li>
  );
};

export default ItemDetails;
