import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Categories></Categories>
        </div>
    );
};

export default Home;