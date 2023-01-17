import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";

const LayoutPublic = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutPublic
