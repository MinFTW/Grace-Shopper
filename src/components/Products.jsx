import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Product } from './';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products');

        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='mt-10 mb-10 flex flex-col items-center justify-center lg:flex-row lg:flex-wrap'>
      {products.map((product) => {
        return (
          <Link to={`/products/${product.id}`} key={product.id}>
            <Product key={product.id} product={product} />
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
