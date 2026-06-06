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

  const [deliveryCharge, setDeliveryCharge] = useState(0);

  const handleChanger = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ✅ FIXED: correct cart structure
  const subtotal = cart.reduce(
    (total, item) =>
      total + (item.product?.price || 0) * item.quantity,
    0
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

        {/* SHIPPING */}
        <section className="flex-1 rounded-lg p-4 sm:p-6">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-8">
            Shipping Address
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {Object.keys(formData).map((field) => (
              <div key={field} className={field === "address" ? "md:col-span-2" : ""}>
                <h1 className="text-lg mb-1 capitalize">
                  {field}
                </h1>

                {field === "address" ? (
                  <textarea
                    name={field}
                    value={formData[field]}
                    onChange={handleChanger}
                    className="w-full border-b-2 outline-none h-24 resize-none text-lg"
                  />
                ) : (
                  <input
                    name={field}
                    value={formData[field]}
                    onChange={handleChanger}
                    className="w-full border-b-2 outline-none text-lg py-1"
                    type="text"
                  />
                )}
              </div>
            ))}
          </form>

          {/* DELIVERY */}
          <aside className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

            <div className="border rounded-lg p-4 cursor-pointer">
              <input
                type="radio"
                name="delivery"
                onChange={() => setDeliveryCharge(52)}
              />
              <span className="ml-2">Delivery By Tomorrow</span>
              <h1 className="text-right text-lg font-medium mt-2">₹52</h1>
            </div>

            <div className="border rounded-lg p-4 cursor-pointer">
              <input
                type="radio"
                name="delivery"
                onChange={() => setDeliveryCharge(0)}
              />
              <span className="ml-2">Delivery By 3-5 Days</span>
              <h1 className="text-right text-lg font-medium mt-2">Free</h1>
            </div>

          </aside>
        </section>

        {/* CART SUMMARY */}
        <section className="xl:w-[420px] border rounded-sm p-4 sm:p-6">

          <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

          {cart.length === 0 && (
            <p className="text-gray-500">Your cart is empty</p>
          )}

          {cart.map((item, index) => (
            <div
              key={item.product?._id || index}
              className="flex items-start justify-between gap-4 mb-4"
            >
              <div className="flex gap-4">

                <img
                  className="h-24 w-24 border object-cover"
                  src={item.product?.image}
                  alt={item.product?.name}
                />

                <div>
                  <h1 className="font-medium text-lg">
                    {item.product?.name}
                  </h1>

                  <h1 className="text-gray-600">
                    Quantity: {item.quantity}
                  </h1>

                  <h1 className="text-gray-600">
                    Price: ₹{item.product?.price}
                  </h1>
                </div>

              </div>

              <h1 className="font-semibold text-lg">
                ₹{(item.product?.price || 0) * item.quantity}
              </h1>
            </div>
          ))}

          {/* TOTALS */}
          <div className="border-t mt-6 pt-4 space-y-3">

            <div className="flex justify-between">
              <h1>Subtotal</h1>
              <h1>₹{subtotal}</h1>
            </div>

            <div className="flex justify-between">
              <h1>Shipping</h1>
              <h1>₹{deliveryCharge}</h1>
            </div>

            <div className="flex justify-between">
              <h1>Handling</h1>
              <h1>₹20</h1>
            </div>

            <div className="flex justify-between text-xl font-semibold border-t pt-3">
              <h1>Grand Total</h1>
              <h1>₹{subtotal + 20 + deliveryCharge}</h1>
            </div>

          </div>

          <button
            onClick={placeOrder}
            className="w-full bg-black text-white py-3 mt-6 text-lg font-medium"
          >
            Place Order
          </button>

        </section>
      </main>
    </>
  );
};

export default CheckOut;
