import {
  useContext,
  createContext,
  useState,
  useEffect,
  useEffectEvent,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(
        (item) => item.id === product.id && item.size === product.size,
      );

      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((items) =>
        items.id === id ? { ...items, quantity: items.quantity + 1 } : items,
      ),
    );
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.flatMap((item) => {
        if (item.id !== id) return item;
        if (item.quantity === 1) {
          return [];
        }
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }),
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
