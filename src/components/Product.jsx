import React from 'react';

const Product = ({ product }) => {
  return (
    <div className='card m-5 cursor-pointer bg-base-100 shadow-xl md:w-96'>
      <figure>
        <img src={`${product.imageURL}`} alt={product.name} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>
          {product.name}
          <div className='badge badge-secondary flex items-center p-2'>NEW</div>
        </h2>
        <div className='mt-5 flex flex-row items-center justify-between'>
          <div className='badge badge-outline p-3'>{product.category}</div>
          <div className='card-actions justify-end text-2xl font-bold'>
            ${product.price}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
