import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { cart } = useCart(); 

  const getTotalItems = () => {
    return cart.reduce((total, product) => total + (product.quantity || 1), 0);
  };

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto p-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-black mr-4 hover:text-gray-600 focus:outline-none roboto-condensed">Home</Link>
          <div className="relative">
            <Link to="/cart" className="text-black hover:text-gray-600 focus:outline-none roboto-condensed">
              Carrinho
            </Link>
            {cart.length > 0 && (
              <span className="bg-red-500 text-white text-xs py-0.5 px-1 rounded-full absolute -top-2 -right-4 roboto-condensed">
                {getTotalItems()}
              </span>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
