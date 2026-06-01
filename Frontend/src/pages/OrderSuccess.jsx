import React from "react";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold">Order Placed 🎉</h1>

      <p className="mt-4 text-lg">Thank you for shopping with us.</p>

      <Link to="/" className="mt-8 bg-black text-white px-6 py-3">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
