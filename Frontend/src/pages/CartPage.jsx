import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const CartPage = () => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCart();

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Final Touch",
      path: "/accessories",
    },
    {
      name: "Sound Essential",
      path: "/sounds",
    },
    {
      name: "Urban Sneakers",
      path: "/sneakers",
    },
    {
      name: "Clothings",
      path: "/clothing",
    },
  ];

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl sm:text-5xl font-bold">Your Cart is Empty</h1>

        <p className="text-gray-500 mt-4 text-center">
          Looks like you haven't added anything yet.
        </p>

        <Link to="/" className="mt-8 bg-black text-white px-6 py-3">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <>
      <div>
        <div className="flex items-center justify-between p-2 px-8 mt-4">
          <h1 className="text-7xl font-medium">Summary</h1>
          <div>
            {navItems.map((link) => {
              return (
                <Link
                  className="flex text-3xl mx-4 mt-4"
                  to={link.path}
                  key={link}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Cart Items  */}
        {cart.map((item) => (
          <div
            className="flex items-center m-4 justify-between px-10 mt-4 "
            key={item.id}
          >
            <section className="flex gap-4 ">
              <div>
                <img
                  className="object-cover h-[300px] w-60"
                  src={item.image}
                  alt=""
                />
              </div>
              <div className="">
                <h1 className="text-3xl font-medium">{item.name}</h1>
                <h1 className="text-3xl mt-2 font-semibold">₹{item.price}</h1>
                {item.size && (
                  <h1 className="text-xl font-semibold">Size : {item.size}</h1>
                )}
                <div className="flex items-center mt-10">
                  <button
                    className="bg-black text-white font-medium cursor-pointer text-2xl px-2 p-0.5"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <p className="text-2xl border-2 px-4 font-medium ">
                    {item.quantity}
                  </p>
                  <button
                    className="bg-black text-white font-medium text-2xl px-2 p-0.5 cursor-pointer"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-black cursor-pointer px-4 p-1 mx-4 text-white text-xl"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </section>
          </div>
        ))}
        <button
          onClick={() => navigate("/cart/checkout")}
          className="bg-black text-white text-xl px-5 p-2 w-96 mx-14 cursor-pointer "
        >
          Proceed To CheckOut
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CartPage;
