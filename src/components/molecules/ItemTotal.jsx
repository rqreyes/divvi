import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const ItemTotal = () => {
  const { tax, updateTax, tip, updateTip, subtotal, total } = useContext(
    ItemContext
  );

  // if the subtotal and tip exists
  // then calculate the percent
  // else if the tip exists
  // then display 100
  // else display 0
  const tipPercentDisplay =
    subtotal && parseFloat(tip)
      ? Math.round((tip / subtotal) * 100)
      : parseFloat(tip)
      ? 100
      : 0;

  return (
    <ul className='item-total'>
      <li className='total'>
        <strong>Subtotal</strong>
        <strong>${subtotal.toFixed(2)}</strong>
      </li>
      <li className='tax-tip'>
        <span>Tax</span>
        <span>
          $
          <Input
            type='number'
            step='0.01'
            min='0'
            placeholder='Enter Tax'
            value={tax}
            onChange={(e) => updateTax(e.target.value)}
          />
        </span>
      </li>
      <li className='tax-tip'>
        <span>Tip {`(${tipPercentDisplay}%)`}</span>
        <span>
          $
          <Input
            type='number'
            step='0.01'
            min='0'
            placeholder='Enter Tip'
            value={tip}
            onChange={(e) => updateTip(e.target.value)}
          />
        </span>
      </li>
      <div className='button-group'>
        <Button
          className='primary'
          type='button'
          onClick={() => updateTip((subtotal * 0.15).toFixed(2))}
        >
          15%
        </Button>
        <Button
          className='primary'
          type='button'
          onClick={() => updateTip((subtotal * 0.18).toFixed(2))}
        >
          18%
        </Button>
        <Button
          className='primary'
          type='button'
          onClick={() => updateTip((subtotal * 0.2).toFixed(2))}
        >
          20%
        </Button>
      </div>
      <li className='total'>
        <strong>Total</strong>
        <strong>${total.toFixed(2)}</strong>
      </li>
    </ul>
  );
};

export default ItemTotal;
