import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <NavLink to="#">cookie</NavLink>
            <NavLink to="#">politica de privacidad</NavLink>
            <NavLink to="#">aviso legal</NavLink>
            <div>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-twitter-square"></i>
            </div>
        </footer>
    )
}

export default Footer
