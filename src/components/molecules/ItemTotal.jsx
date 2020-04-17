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
        <strong>Subtotal</strong>
        <strong>${subtotal.toFixed(2)}</strong>
      </li>
      <li className='tax-tip'>
        <div>
          <span>Tax</span>
          <span>Tip</span>
        </div>
        <form>
          <Input
            type='number'
            step='0.01'
            min='0'
            placeholder='Enter Tax'
            value={tax}
            onChange={(e) => updateTax(e.target.value)}
          />
          <Input
            type='number'
            step='0.01'
            min='0'
            placeholder='Enter Tip'
            value={tip}
            onChange={(e) => updateTip(e.target.value)}
          />
        </form>
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
