import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/Products';

const ProductList: React.FC = () => {
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center text-black roboto-condensed mt-20">Bem-vindo à Loja</h1>
      <h2 className="text-2xl font-bold mb-4 text-center text-black roboto-condensed">Lista de Produtos</h2>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 max-w-xs mx-auto">
              <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4"/>
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-4 text-black roboto-condensed">{product.name}</h2>
                <p className="text-lg font-bold mb-2 text-black roboto-condensed">R$ {product.price}</p>
                <div className="flex justify-between items-center">
                  <button className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 roboto-condensed" onClick={() => addToCart(product)}>
                    Adicionar ao Carrinho
                  </button>
                  <Link to={`/product/${product.id}`} className="text-black hover:text-gray-600 focus:outline-none roboto-condensed">
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
