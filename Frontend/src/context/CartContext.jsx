import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      console.log("FETCH CART RESPONSE:", data);

      if (data.success) {
        setCart(data.cart?.items || []);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const addToCart = async (product) => {
    console.log("PRODUCT RECEIVED:", product);
    console.log("PRODUCT ID:", product?._id);
    try {
      console.log("ADD TO CART PRODUCT:", product);

      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId: product._id,
          quantity: 1,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.success) {
        fetchCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const updateQuantity = async (productId, quantity) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      });

      const data = await response.json();

      if (data.success) {
        fetchCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

const increaseQuantity = async (productId) => {
  try {
    const token = localStorage.getItem("token");

    // 1. find item
    const item = cart.find(
      (item) => item.product._id === productId
    );

    if (!item) return;

    const newQuantity = item.quantity + 1;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );

    await fetch(`${import.meta.env.VITE_API_URL}/api/cart/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        quantity: newQuantity,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

const decreaseQuantity = async (productId) => {
  try {
    const token = localStorage.getItem("token");

    const item = cart.find(
      (item) => item.product._id === productId
    );

    if (!item || item.quantity <= 1) return;

    const newQuantity = item.quantity - 1;

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product._id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    );

    await fetch(`${import.meta.env.VITE_API_URL}/api/cart/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        productId,
        quantity: newQuantity,
      }),
    });
  } catch (error) {
    console.log(error);
  }
};

  const removeFromCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${`${import.meta.env.VITE_API_URL}/api/cart/update`}/api/cart/remove/${productId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        fetchCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/clear`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (data.message) {
        fetchCart();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        fetchCart,
        increaseQuantity,
        decreaseQuantity,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
