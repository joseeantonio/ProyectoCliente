import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../img/logo_pokemon.png'
import {useUserContext} from "../Context/UserContext.jsx";

const Navbar = () => {


    const { user, setUser } = useUserContext()



    return (
        <header>
            <section className="section">
                <NavLink to="/"><img src={Logo}/></NavLink>
                <nav className="menu_ordenador">
                    <ul>
                        {user && (
                            <div>
                                <li><NavLink to="/pokemons">PERSONAJES</NavLink></li>
                                <li><NavLink to="/pokemons">NOTICIAS</NavLink></li>
                                <li><NavLink to="/">PREGUNTAS FRECUENTES</NavLink></li>
                            </div>
                        )}
                        {user ? (
                            <button className='btn btn-dark' >
                                Cerrar sesión
                            </button>
                        ):(
                            <div>
                                <li><NavLink to="/login">INICIAR SESION</NavLink></li>
                                <li className="boton"><NavLink to="/register">REGISTRARSE</NavLink></li>
                            </div>
                        )}

                    </ul>
                </nav>
                <button onClick={() => {
                    document.querySelector('.menu_hamburguesa').classList.toggle('mostrar');
                }} className="menu_hamburguesa"><i className="fas fa-bars"></i></button>
            </section>
            <nav className="menu_movil">
                <ul>
                    <li><NavLink to="/">PERSONAJES</NavLink></li>
                    <li><NavLink to="/">NOTICIAS</NavLink></li>
                    <li><NavLink to="/">PREGUNTAS FRECUENTES</NavLink></li>
                    <li><NavLink to="/login">INICIAR SESION</NavLink></li>
                    <li><NavLink to="/register">REGISTRARSE</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
