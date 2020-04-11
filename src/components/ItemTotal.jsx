import React, { useContext } from 'react';
import { ItemContext } from '../contexts/ItemContext';

const ItemTotal = () => {
  const { tax, updateTax, tip, updateTip, subtotal, total } = useContext(
    ItemContext
  );
  const subtotalDisplay = subtotal || 0;
  const totalDisplay = total || 0;

  return (
    <ul>
      <li>
        <span>Subtotal</span>
        <span>{subtotalDisplay.toFixed(2)}</span>
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
        <span>{totalDisplay.toFixed(2)}</span>
      </li>
    </ul>
  );
};

export default ItemTotal;
