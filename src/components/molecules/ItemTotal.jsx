import React, { useContext } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const ItemTotal = () => {
  const { tax, updateTax, tip, updateTip, subtotal, total } = useContext(
    ItemContext
  );

  return (
    <ul className='item-total'>
      <li className='total'>
        <span>
          <strong>Subtotal</strong>
        </span>
        <span>${subtotal.toFixed(2)}</span>
      </li>
      <li className='tax-tip'>
        <span>Tax</span>
        <Input
          type='number'
          placeholder='Enter Tax'
          value={tax}
          onChange={(e) => updateTax(e.target.value)}
        />
      </li>
      <li className='tax-tip'>
        <span>Tip</span>
        <Input
          type='number'
          placeholder='Enter Tip'
          value={tip}
          onChange={(e) => updateTip(e.target.value)}
        />
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
        <span>
          <strong>Total</strong>
        </span>
        <span>${total.toFixed(2)}</span>
      </li>
    </ul>
  );
};

export default ItemTotal;
