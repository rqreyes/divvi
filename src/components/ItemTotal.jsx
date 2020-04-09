import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemTotal = () => {
  const { tax, updateTax, tip, updateTip, subtotal, total } = useContext(
    ItemContext
  );

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
          onChange={(e) => updateTax(e.target.value)}
        />
      </li>
      <li>
        <span>Tip</span>
        <input
          type='number'
          value={tip}
          onChange={(e) => updateTip(e.target.value)}
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
