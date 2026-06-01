import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    city: "",
    state: "",
    pincode: "",
    address: "",
  });

  const [delieveryCharge, setDelieveryCharge] = useState(0);

  const handleChanger = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const placeOrder = () => {
    if (
      !formData.firstName ||
      !formData.phone ||
      !formData.email ||
      !formData.city ||
      !formData.state ||
      !formData.pincode ||
      !formData.address
    ) {
      alert("Please fill all required fields");
      return;
    }
    clearCart();
    navigate("/order-success");
  };

  return (
    <>
      <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold px-4 sm:px-8 lg:px-10 pt-8">
        CheckOut
      </h1>

      <main className="flex flex-col xl:flex-row gap-10 px-4 sm:px-8 lg:px-10 py-8">
        {/* Shipping Address */}
        <section className="flex-1  rounded-lg p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
            Shipping Address
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h1 className="text-lg mb-1">First Name</h1>
              <input
                required
                onChange={handleChanger}
                value={formData.firstName}
                className="w-full border-b-2 outline-none text-lg py-1"
                type="text"
                name="firstName"
                placeholder="Nand"
              />
            </div>

            <div>
              <h1 className="text-lg mb-1">Last Name</h1>
              <input
                onChange={handleChanger}
                value={formData.lastName}
                className="w-full border-b-2 outline-none text-lg py-1"
                type="text"
                name="lastName"
                placeholder="Kishore"
              />
            </div>

            <div>
              <h1 className="text-lg mb-1">Phone Number</h1>
              <input
                required
                onChange={handleChanger}
                value={formData.phone}
                className="w-full border-b-2 outline-none text-lg py-1"
                type="text"
                name="phone"
                placeholder="85475-54774"
              />
            </div>

            <div>
              <h1 className="text-lg mb-1">Email Address</h1>
              <input
                className="w-full border-b-2 outline-none text-lg py-1"
                type="email"
                required
                onChange={handleChanger}
                value={formData.email}
                name="email"
                placeholder="nandkishore21@gmail.com"
              />
            </div>

            <div>
              <h1 className="text-lg mb-1">City</h1>
              <input
                className="w-full border-b-2 outline-none text-lg py-1"
                type="text"
                onChange={handleChanger}
                value={formData.city}
                required
                name="city"
                placeholder="Ghaziabad"
              />
            </div>

            <div>
              <h1 className="text-lg mb-1">State</h1>
              <input
                className="w-full border-b-2 outline-none text-lg py-1"
                type="text"
                onChange={handleChanger}
                value={formData.state}
                required
                name="state"
                placeholder="Uttar Pradesh"
              />
            </div>

            <div>
              <h1 className="text-lg mb-1">Pincode</h1>
              <input
                className="w-full border-b-2 outline-none text-lg py-1"
                type="text"
                onChange={handleChanger}
                value={formData.pincode}
                required
                name="pincode"
                placeholder="201002"
              />
            </div>

            <div className="md:col-span-2">
              <h1 className="text-lg mb-1">Address</h1>
              <textarea
                onChange={handleChanger}
                value={formData.address}
                required
                name="address"
                className="w-full border-b-2 outline-none h-24 resize-none text-lg"
                placeholder="Enter your complete address"
              ></textarea>
            </div>
          </form>

          {/* Delivery Options */}
          <aside className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className="border rounded-lg p-4 cursor-pointer">
              <div>
                <input type="radio" name="delivery" />
                <span onClick={() => setDelieveryCharge(52)} className="ml-2">
                  Delivery By Tomorrow
                </span>
              </div>

              <h1 className="text-right text-lg font-medium mt-2">₹52</h1>
            </div>

            <div className="border rounded-lg p-4 cursor-pointer">
              <div>
                <input
                  onClick={() => setDelieveryCharge(0)}
                  type="radio"
                  name="delivery"
                />
                <span className="ml-2">Delivery By 3-5 Days</span>
              </div>

              <h1 className="text-right text-lg font-medium mt-2">Free</h1>
            </div>
          </aside>
        </section>

        {/* Cart Summary */}
        <section className="xl:w-[420px] border rounded-sm p-4 sm:p-6 h-195">
          <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>
          {/* Product */}
          {cart.map((items) => {
            return (
              <div
                key={`${items.id}-${items.size || "no size"}`}
                className="flex items-start justify-between gap-4"
              >
                <div className="flex gap-4 mt-4">
                  <img
                    className="h-24 w-24 sm:h-28 sm:w-26 border object-cover"
                    src={items.image}
                    alt={items.name}
                  />

                  <div>
                    <h1 className="font-medium text-lg">{items.name}</h1>

                    {items.size && (
                      <h1 className="text-gray-600">Size: {items.size}</h1>
                    )}

                    <h1 className="text-gray-600">
                      Quantity: {items.quantity}
                    </h1>
                  </div>
                </div>

                <h1 className="font-semibold text-lg">
                  {items.price * items.quantity}
                </h1>
              </div>
            );
          })}
          <div className="border-t mt-6 pt-4 space-y-3">
            <div className="flex justify-between">
              <h1>Subtotal</h1>
              <h1>{subtotal}</h1>
            </div>

            <div className="flex justify-between">
              <h1>Shipping Charges</h1>
              <h1>₹{delieveryCharge}</h1>
            </div>

            <div className="flex justify-between">
              <h1>Handling Charges</h1>
              <h1>₹20</h1>
            </div>

            <div className="flex justify-between text-xl font-semibold border-t pt-3">
              <h1>Grand Total</h1>
              <h1>₹{subtotal + 20 + delieveryCharge}</h1>
            </div>
          </div>
          ;
          <button
            onClick={placeOrder}
            className="w-full bg-black text-white py-3 mt-6 text-lg font-medium cursor-pointer"
          >
            Place Order
          </button>
        </section>
      </main>
    </>
  );
};

export default CheckOut;
