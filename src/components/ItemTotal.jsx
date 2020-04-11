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
        <div>
          <button
            type='button'
            onClick={() => updateTip((subtotal * 0.15).toFixed(2))}
          >
            15%
          </button>
          <button
            type='button'
            onClick={() => updateTip((subtotal * 0.18).toFixed(2))}
          >
            18%
          </button>
          <button
            type='button'
            onClick={() => updateTip((subtotal * 0.2).toFixed(2))}
          >
            20%
          </button>
        </div>
      </li>
      <li>
        <span>Total</span>
        <span>{totalDisplay.toFixed(2)}</span>
      </li>
    </ul>
  );
};

export default ItemTotal;
