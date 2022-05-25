import React from 'react';
import './Item.css';

const Item = (props) => {
        // console.log(props.product);
  const { product, showPurchase } = props;
  const { name, img, price, minimumOrder, stock, details } = product;
  // console.log(props);
    return (
        <div className="product sm:w-64 sm:h-64 ">
      <img src={img} alt=""></img>
      <div className="product-details pl-4">
        <p className="details">Name:{name}</p>
        <p className="details">price:{price}</p>
        <p className="details">Stock:{stock}</p>
        <p className="details">Minimum-Order:{minimumOrder}</p>
        <p className="details">Details:{details}</p>
      </div>
      <button onClick={() => showPurchase ()} className="btn-cart">
        <p className="btn-text"> Purchase</p>
        
      </button>
    </div>
    );
};

export default Item;