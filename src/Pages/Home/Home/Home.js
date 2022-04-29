import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import Equipments from '../Equipments/Equipments';
import Inventory from '../Inventory/Inventory';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Inventory></Inventory>
            <Categories></Categories>
            <Equipments></Equipments>
        </div>
    );
};

export default Home;