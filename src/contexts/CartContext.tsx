import { createContext, useEffect, useState } from "react";
import { Tooltip } from "../components/Tooltip";

interface CartContextType {
  cartQuantity: number;
  addToCart: (product: Product) => void;
  cartItems: Product[];
  handleAddQuantity: (id: number) => void;
  handleRemoveItem: (id: number) => void;
  handleRemoveQuantity: (id: number) => void;
}

interface CartProviderProps {
  children: React.ReactNode;
}

interface Product {
  id: number;
  image: string;
  title: string;
  price: number;
  quantity: number;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([] as Product[]);
  const [isVisibleTooltip, setIsVisibleTooltip] = useState(false);

  function showTooltip() {
    setIsVisibleTooltip(true);
    setTimeout(() => {
      setIsVisibleTooltip(false);
    }, 1500);
  }

  function addToCart(product: Product) {
    const productAlreadyInCart = cart.find((item) => item.id === product.id);
    if (productAlreadyInCart) {
      setCart((prev) => {
        const newCart = prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
        return newCart;
      });
      showTooltip();
      return;
    }
    setCart((state) => {
      localStorage.setItem("cart", JSON.stringify([...state, product]));
      showTooltip();
      return [...state, product];
    });
  }

  const handleAddQuantity = (id: number) => {
    setCart((prev) => {
      const newCart = prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleRemoveItem = (id: number) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => item.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  const handleRemoveQuantity = (id: number) => {
    setCart((prev) => {
      const newCart = prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
            }
          : item
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem("cart");
    if (cartLocalStorage) {
      setCart(JSON.parse(cartLocalStorage));
    }
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartQuantity: cart.length,
        addToCart,
        cartItems: cart,
        handleAddQuantity,
        handleRemoveItem,
        handleRemoveQuantity,
      }}
    >
      {isVisibleTooltip && <Tooltip />}
      {children}
    </CartContext.Provider>
  );
}
