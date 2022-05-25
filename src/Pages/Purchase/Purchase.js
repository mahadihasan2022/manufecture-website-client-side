import React, { useEffect, useState } from 'react';
import Item from '../../Component/Item/Item';
import './Purchase.css';


const Purchase = () => {
    const [products,setProducts] = useState();
    // const [details , setDetails] = useState({});

    useEffect(()=>{
        const url = `http://localhost:5000/tools`
        fetch(url)
        .then(res=>res.json()).then(data=>{
            setProducts(data);
        })
    },[])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10 purchase '>
        {
            products?.map(product=> <Item
            key={product.id}
            product={product}
         //    setDetails={setDetails}
            ></Item>)
        }
    </div>
 );
};

export default Purchase;