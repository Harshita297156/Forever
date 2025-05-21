import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { products } from '../assets/frontend_assets/assets';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts]=useState([]);

    useEffect(()=>{
       setLatestProducts(products.slice(0,10));
    },[])

  return (
    <div className='my-10'>
     <div className='text-center py-8 text-3xl'>
       <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
       <p className='w-3/4 m-auto text-xs sm:text-base text-gray-600'>
       Our latest collection is a celebration of elegance, craftsmanship, and timeless beauty. Each piece is meticulously designed to blend modern aesthetics with classic sophistication, ensuring that every detail exudes charm and refinement. Inspired by the latest trends yet rooted in tradition, this collection brings together rich textures, exquisite patterns, and a harmonious palette of colors that captivate the senses. Whether you seek effortless grace or bold statements, our newest creations are a testament to unparalleled artistry and innovation. Step into a world where fashion meets finesse, and let our latest collection redefine your style with unmatched elegance.
       </p>
     </div>
      {/* rendering product */}
      <div className='grid grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
          {
            latestProducts.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
          }

      </div>
    </div>
  )
}

export default LatestCollection
