import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Navbar from './components/Navbar';
import './index.css'
import Finalized from './pages/Finalized';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className=""> 
          <Navbar />
          <div className=""> 
            <Routes>
              <Route path="/" Component={Home} />
              <Route path="/product/:id" Component={ProductDetail} />
              <Route path="/cart/finalized" Component={Finalized} />
              <Route path="/cart" Component={Cart} />
            </Routes>
          </div>
        </div>
    </BrowserRouter>
  );
};

export default App;
