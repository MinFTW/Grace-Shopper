import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, ProductList } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/products' exact element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
