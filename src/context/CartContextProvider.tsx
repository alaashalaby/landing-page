import { createContext, ReactNode, useState } from "react";
interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
}
export const CartContext = createContext<CartContextProps | null>(null);
const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const addToCart = (product: Product) => {
    const existingItem = cartItems.find(
      (item: CartItem) => item.id === product.id
    );
    if (existingItem) {
      setCartItems(
        cartItems.map((item: CartItem) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item: CartItem) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item: CartItem) => item.quantity > 0)
    );
  };
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
