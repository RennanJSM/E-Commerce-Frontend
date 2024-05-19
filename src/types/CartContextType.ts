import { CartItem } from './CartItemInterface';

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (productId: number) => void;
  setCart: (cart: CartItem[]) => void;  
}
