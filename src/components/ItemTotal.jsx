import React, { useContext, useState } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemTotal = () => {
  const { items } = useContext(ItemContext);
  const [tax, setTax] = useState('');
  const [tip, setTip] = useState('');
  const subtotal = items.every((item) => item.price)
    ? items
        .reduce((sum, item) => {
          return (sum += item.price);
        }, 0)
        .toFixed(2)
    : 'Enter all the prices foo';
  const total =
    tax && tip
      ? (parseFloat(subtotal) + parseFloat(tax) + parseFloat(tip)).toFixed(2)
      : 'Add tax and tip foo';

  return (
    <ul>
      <li>
        <span>Subtotal</span>
        <span>{subtotal}</span>
      </li>
      <li>
        <span>Tax</span>
        <input
          type='number'
          value={tax}
          onChange={(e) => setTax(e.target.value)}
        />
      </li>
      <li>
        <span>Tip</span>
        <input
          type='number'
          value={tip}
          onChange={(e) => setTip(e.target.value)}
        />
      </li>
      <li>
        <span>Total</span>
        <span>{total}</span>
      </li>
    </ul>
  );
};

export default ItemTotal;
