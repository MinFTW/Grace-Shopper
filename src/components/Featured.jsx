import React from 'react';

const Featured = () => {
  return (
    <div className='m-5 flex flex-row gap-5'>
      <article
        className='flex h-[70vh] w-full max-w-2xl cursor-pointer flex-col items-center justify-center bg-cover bg-center p-10'
        style={{
          backgroundImage: 'url(https://bit.ly/3dAHb66)',
        }}
      >
        <h1 className='min-h-33 mt-5 text-4xl font-bold text-white'>
          HOUSEPLANTS
        </h1>
        <button className='btn mt-5 cursor-pointer rounded-full border-none bg-white text-gray-500 hover:bg-slate-100'>
          SHOP NOW
        </button>
      </article>

      <article
        className='flex h-[70vh] w-full max-w-2xl cursor-pointer flex-col items-center justify-center bg-cover bg-center p-10'
        style={{
          backgroundImage: 'url(https://bit.ly/3bTLBoh)',
        }}
      >
        <h1 className='min-h-33 mt-5 text-4xl font-bold text-white'>
          SUCCULENTS
        </h1>
        <button className='btn mt-5 cursor-pointer rounded-full border-none bg-white text-gray-500 hover:bg-slate-100'>
          SHOP NOW
        </button>
      </article>

      <article
        className='flex h-[70vh] w-full max-w-2xl cursor-pointer flex-col items-center justify-center bg-cover bg-center p-10'
        style={{
          backgroundImage: 'url(https://bit.ly/3dMY7Xe)',
        }}
      >
        <h1 className='min-h-33 mt-5 text-4xl font-bold text-white'>
          SUPPLIES
        </h1>
        <button className='btn mt-5 cursor-pointer rounded-full border-none bg-white text-gray-500 hover:bg-slate-100'>
          SHOP NOW
        </button>
      </article>
    </div>
  );
};

export default Featured;

// const Container = styled.div`
//   flex: 1;
//   margin: 3px;
//   height: 70vh;
//   position: relative;
// `;

// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
//   ${mobile({ height: '30vh' })}
// `;

// const Info = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

// const Title = styled.h1`
//   color: white;
//   margin-bottom: 20px;
// `;

// const Button = styled.button`
//   border: none;
//   padding: 10px;
//   background-color: white;
//   color: gray;
//   cursor: pointer;
//   font-weight: 600;
// `;

// const CategoryItem = ({ product }) => {
//   return (
//     <Container>
//       <Link to={`/products/${product.category}`}>
//         <Image src={product.image} />
//         <Info>
//           <Title>{product.title}</Title>
//           <Button>SHOP NOW</Button>
//         </Info>
//       </Link>
//     </Container>
//   );
// };
