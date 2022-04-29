import React from 'react';
import { useParams } from 'react-router-dom';

const InventoryUpdate = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>InventoryUpdate: {id}</h1>
        </div>
    );
};

export default InventoryUpdate;