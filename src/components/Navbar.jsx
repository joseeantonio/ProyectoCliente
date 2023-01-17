import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../img/logo_pokemon.png'
import {useUserContext} from "../Context/UserContext.jsx";


const Navbar = () => {

    // Cogemos el valor del usuario
    const { user, setUser } = useUserContext()

    //De esta forma si pulssa el boton de cerrar sesion, el usuario sera null por lo que se tendria que
    //loguear para volver a ver todas las rutas
    const cerrarSesion = () => {
        setUser(null)
    }

    return (
        <header>
            <section className="section">
                <NavLink to="/"><img src={Logo}/></NavLink>
                <nav className="menu_ordenador">
                    <ul>
                        {user && (
                            <div>
                                <li><NavLink to="/pokemons">PERSONAJES</NavLink></li>
                                <li><NavLink to="/contacto">CONTACTO</NavLink></li>
                            </div>
                        )}
                        {user ? (
                            <button className='btn btn-dark'
                            onClick={cerrarSesion}>
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
        </header>
    )
}

export default Navbar
