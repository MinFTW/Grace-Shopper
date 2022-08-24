import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductList, Product } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:productId' element={<Product />} />
      </Routes>
    </Router>
  );
};

export default App;
