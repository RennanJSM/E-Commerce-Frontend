import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { CartItem } from '../types/CartItemInterface';
import { CartContextType } from '../types/CartContextType';

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product: CartItem) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(p => p.id === product.id);
      if (existingProduct) {
        return prevCart.map(p =>
          p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item => {
        if (item.id === productId) {
          if (item.quantity && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; 
          }
        }
        return item;
      });
  
      return updatedCart.filter(item => item !== null) as CartItem[]; 
    });
  };
  
  
  
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
