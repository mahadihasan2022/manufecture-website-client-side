import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Product = () => {
    const [products, setProducts] = useState([]);
    
  
    useEffect(() => {
      fetch("http://localhost:5000/tools")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
    
   
    return (
        <div className="cont-cont">
        <div className="p-9">
            <h1 className='text-4xl text-black font-bold p-8'>Our Tools</h1>
          <div className="grid">
            <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-gap-4">
              {products.map((product) => (
                <Item
                  key={product._id}
                  product={product}
              
                ></Item>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Product;