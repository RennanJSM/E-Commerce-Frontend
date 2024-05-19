import React from 'react';
import ProductList from '../components/ProductList';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div className="flex justify-center">
      <Navbar />
      <ProductList />
    </div>
  );
};

export default Home;
