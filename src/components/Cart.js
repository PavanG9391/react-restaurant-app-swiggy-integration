import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ItemLists from './ItemLists';
import { clearCart } from '../uitls/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>

      <div className="max-w-4xl mx-auto">
        <button
          className="p-2 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 ? (
          <div className="mt-8 flex flex-col items-center justify-center">
            <svg
              className="w-24 h-24 text-gray-300 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h18v18H3V3z"
              />
            </svg>
            <h3 className="text-lg text-gray-600 mb-2">Your cart is empty</h3>
            <p className="text-gray-500">
              Looks like you haven't added anything to your cart yet. Start shopping now to fill it up!
            </p>
          </div>
        ) : (
          <ItemLists items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;