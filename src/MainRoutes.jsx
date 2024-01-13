import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const MainRoutes = () => {
    return (
        <div>
            <div ><Navbar></Navbar></div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainRoutes;