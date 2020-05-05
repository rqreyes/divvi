import React, { useContext, ChangeEvent } from 'react';
import { ItemContext } from '../../contexts/ItemContext';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const ItemTotal = () => {
  const {
    itemsSubtotal,
    tax,
    setTax,
    tip,
    setTip,
    tipPercent,
    setTipPercent,
    itemsTotal,
  } = useContext(ItemContext)!;

  return (
    <ul className='item-total'>
      <li className='total'>
        <strong>Subtotal</strong>
        <strong>${itemsSubtotal.toFixed(2)}</strong>
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTax(e.currentTarget.value)
            }
            onBlur={() => setTax(tax ? parseFloat(tax).toFixed(2) : '')}
          />
        </span>
      </li>
      <li className='tax-tip'>
        <span>Tip {`(${Math.round(tipPercent * 100)}%)`}</span>
        <span>
          $
          <Input
            type='number'
            step='0.01'
            min='0'
            placeholder='Enter Tip'
            value={tip}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTip(e.currentTarget.value)
            }
            onBlur={() => {
              setTip(tip ? parseFloat(tip).toFixed(2) : '');
              setTipPercent(
                parseFloat(tip) / (itemsSubtotal || parseFloat(tip)) || 0
              );
            }}
          />
        </span>
      </li>
      <div className='button-group'>
        <Button
          className='primary'
          type='button'
          onClick={() => {
            setTip((itemsSubtotal * 0.15).toFixed(2));
            setTipPercent(0.15);
          }}
        >
          15%
        </Button>
        <Button
          className='primary'
          type='button'
          onClick={() => {
            setTip((itemsSubtotal * 0.18).toFixed(2));
            setTipPercent(0.18);
          }}
        >
          18%
        </Button>
        <Button
          className='primary'
          type='button'
          onClick={() => {
            setTip((itemsSubtotal * 0.2).toFixed(2));
            setTipPercent(0.2);
          }}
        >
          20%
        </Button>
      </div>
      <li className='total'>
        <strong>Total</strong>
        <strong>${itemsTotal.toFixed(2)}</strong>
      </li>
    </ul>
  );
};

export default ItemTotal;
