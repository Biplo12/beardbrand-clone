import React from 'react';
import CartItem from './CartItem';
const CartItems: React.FC = (): JSX.Element => {
  return (
    <div>
      <h1>CartItems</h1>
      <CartItem />
    </div>
  );
};
export default CartItems;
