import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { ImageSourcePropType } from "react-native";
import { AppLoading } from "expo";

interface CartItem {
  id: number;
  title: string;
  image: ImageSourcePropType;
  size: string;
  price: string;
  flavor: string;
  amount: number;
}

interface CartContext {
  items: CartItem[];
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (id: number, size: string) => void;
  clearCart: () => void;
  loading: boolean;
}

const CartContext = createContext<CartContext>({} as CartContext);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCart() {
      const storagedCart = await AsyncStorage.getItem("@CoffeeShop:cart");

      if (storagedCart) {
        setCart(JSON.parse(storagedCart));
        setLoading(false);
      }
    }

    loadCart();
  }, []);

  async function addToCart(item: CartItem) {
    const productExists = cart.find(
      (p) => p.id === item.id && p.size === item.size
    );
    const currentAmount = productExists ? productExists.amount : 0;

    const amount = currentAmount + 1;

    if (productExists) {
      const updatedCart = cart.map((p: CartItem) =>
        p.id === item.id ? { ...p, amount } : p
      );

      await AsyncStorage.setItem(
        "@CoffeeShop:cart",
        JSON.stringify(updatedCart)
      );
      setCart(updatedCart);
    } else {
      await AsyncStorage.setItem(
        "@CoffeeShop:cart",
        JSON.stringify([...cart, { ...item, amount: 1 }])
      );
      setCart([...cart, { ...item, amount: 1 }]);
    }
  }

  function removeFromCart(id: number, size: string) {
    const updatedCart = cart.filter((p) => p.id !== id && p.size !== size);
    setCart(updatedCart);
  }

  async function clearCart() {
    await AsyncStorage.clear();
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ items: cart, addToCart, removeFromCart, clearCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
