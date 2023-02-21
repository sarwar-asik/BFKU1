import React from 'react';
import { Outlet } from 'react-router-dom';
import MyStatement from '../MyStatement/MyStatement';

const Statement = () => {
    return (
        <div>
            <MyStatement></MyStatement>
            <Outlet></Outlet>
        </div>
    );
};

export default Statement;