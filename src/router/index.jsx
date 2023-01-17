import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Layout from "../layouts/layout";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Pokemones from "../components/Pokemones.jsx";
import Pokemon from "../components/Pokemon.jsx";
import Busqueda from "../components/Busqueda.jsx";
import Filtros from "../components/Filtros.jsx";
import LayoutPrivate from "../layouts/LayoutPrivate.jsx";
import Error from "../pages/Error.jsx";
import Contacto from "../pages/Contacto.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                index: true,
                element: <Home />,
            },
            {
                path: '/register',
                element: <Register />,
            },{
                path: '/login',
                element: <Login />,
            },
            {

                //Ponemos las rutas privadas
                element: <LayoutPrivate />,
                children: [
                    {
                        path: '/pokemons',
                        index: true,
                        element: <Pokemones />,
                    },{
                        path: '/pokemon/:id',
                        element: <Pokemon />,
                    },{
                        path: '/busqueda',
                        element: <Busqueda />,
                    },{
                        path: '/filtros',
                        element: <Filtros />,
                    },,{
                        path: '/contacto',
                        element: <Contacto />,
                    },
                ],
            },
        ],
    },
])


