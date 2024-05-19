import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext'; 
import Navbar from '../components/Navbar';

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, setCart } = useCart();
  const total = cart.reduce((sum, product) => sum + product.price * (product.quantity || 1), 0);
  const navigate = useNavigate();

  const handleClearCart = () => {
    setCart([]);
  };

  const handleFinalizarCompra = () => {
    setCart([]);
    navigate('/cart/finalized');
  };

  const handleRemoveAll = (productId: number) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
  };
  

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-3xl font-bold text-black roboto-condensed mb-4">Carrinho de Compras</h1>
        <p className="text-gray-700 roboto-condensed">Seu carrinho está vazio</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <h1 className="text-3xl font-bold text-black roboto-condensed mb-4">Carrinho de Compras</h1>
      <div className="w-full max-w-2xl">
        <ul className="w-full">
          {cart.map((product) => (
            <li key={product.id} className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 mb-4 w-full">
              <div className="flex items-center mb-4">
                <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover mr-4 rounded"/>
                <div>
                  <h2 className="text-xl font-semibold text-black roboto-condensed">{product.name}</h2>
                  <p className="text-gray-700 roboto-condensed font-semibold">R$ {product.price}</p>
                  <p className="text-gray-700 roboto-condensed">Quantidade: {product.quantity || 1}</p>
                  <div className="flex items-center mt-2">
                    <button
                      className="bg-black text-white py-1 px-3 rounded hover:bg-gray-600 transition-colors duration-300 roboto-condensed mr-2"
                      onClick={() => removeFromCart(product.id)}
                    >
                      -
                    </button>
                    <button
                      className="bg-black text-white py-1 px-3 rounded hover:bg-gray-600 transition-colors duration-300 roboto-condensed mr-2"
                      onClick={() => addToCart(product)}
                    >
                      +
                    </button>
                    <button
                      className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition-colors duration-300 roboto-condensed"
                      onClick={() => handleRemoveAll(product.id)}
                    >
                      Remover
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="w-full mb-4">
          <div className="flex justify-between items-center">
            <button
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors duration-300 roboto-condensed"
              onClick={handleClearCart}
            >
              Limpar Carrinho
            </button>
            <h2 className="text-black roboto-condensed font-bold">Total: R$ {total}</h2>
          </div>
          <button
            className=" mt-3 bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 roboto-condensed w-full"
            onClick={handleFinalizarCompra}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
