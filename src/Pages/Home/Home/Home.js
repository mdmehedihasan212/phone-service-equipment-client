import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import ClientsBlog from '../ClientsBlog/ClientsBlog';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Categories></Categories>
            <ClientsBlog></ClientsBlog>
        </div>
    );
};

export default Home;