import React from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Finalized: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <h1 className="text-3xl font-bold text-center text-black roboto-condensed mb-8">Compra finalizada, obrigado!</h1>
        <div className="flex justify-center">
          <Link to="/" className="bg-black text-white py-2 px-4 rounded hover:text-white hover:bg-gray-600 transition-colors duration-300 roboto-condensed">
            Voltar para a Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Finalized;
