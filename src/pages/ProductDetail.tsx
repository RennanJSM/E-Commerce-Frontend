import React from 'react';
import Navbar from '../components/Navbar';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/Products';  

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="text-center text-red-500">Produto não encontrado</div>;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Navbar />
      <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md p-6">
        <img src={product.imageUrl} alt={product.name} className="w-full h-64 object-cover mb-4 rounded"/>
        <h2 className="text-2xl font-bold mb-4 text-black">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <p className="text-xl font-semibold mb-6 text-black">R$ {product.price}</p>
        <button
          className="bg-black text-white py-2 px-4 rounded hover:bg-gray-600 transition-colors duration-300 roboto-condensed"
          onClick={() => addToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
