import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
          <p>{item.price}</p>
          <button onClick={() => increaseQuantity(item.id)}>+</button>
          <p>{item.quantity}</p>
          <button onClick={() => decreaseQuantity(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default CartPage;
