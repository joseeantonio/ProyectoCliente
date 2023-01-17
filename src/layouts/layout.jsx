import React from 'react'
import { Outlet } from 'react-router-dom'
import NavbarNoregistrado from "../components/NavbarNoregistrado.jsx";
import Footer from "../components/Footer.jsx";

const LayoutPublic = () => {
    return (
        <div>
            <NavbarNoregistrado />
            {/* <nav>Navbar</nav> */}
            {/* <main>Main</main> */}
            <Outlet />
            <Footer />
        </div>
    )
}

export default LayoutPublic
