/* eslint-disable */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const Layout = () => {
  return (
    <div className="layout">
        <Navbar /> 
        <main>
            <Outlet />
        </main>
    </div>
  );
};

export default Layout;
