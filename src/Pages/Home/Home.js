import React from 'react';
import Baner from '../../Component/Baner/Baner';
import DashBoard from '../../Component/DashBoard/DashBoard';
import Exclusive from '../../Component/Exclusive/Exclusive';
import Product from '../../Component/Product/Product';
import './Home.css';

const Home = () => {
    return (
        <div className='home-container'>
            <Baner></Baner>
            <Product></Product>
            <Exclusive></Exclusive>
            <DashBoard></DashBoard>
        </div>
    );
};

export default Home;