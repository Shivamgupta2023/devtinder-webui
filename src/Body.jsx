import React from 'react';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';

const Body = () => {
    return (
        <div>
            {/* Your content goes here */}
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Body;