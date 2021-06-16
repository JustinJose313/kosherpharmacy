import React from "react";
import { useCart } from "react-use-cart";
import CartCard from "./CartCard";

const CartPage = () => {
  const { isEmpty, items } = useCart();
  if (isEmpty) return <p>Your cart is empty</p>;
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        <div className="space-y-4">
          {items.map((each, i) => {
            return <CartCard key={i} data={each} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
