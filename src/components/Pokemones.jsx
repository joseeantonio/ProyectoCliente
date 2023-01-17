import React, {useContext, useState} from "react";
import useFetch from "./UseFetch.jsx";
import Cards from "./Cards.jsx";
import {Link, NavLink} from "react-router-dom";
import Busqueda from "./Busqueda.jsx";

const Pokemones = () => {

    const [url,setUrl] = useState('http://pokeapi.co/api/v2/pokemon')
    const estado = useFetch(url)
    const {cargando,data}=estado





    return(
        <div>
            <h1>Esta es la pagina de pokemon</h1>

            <NavLink to='/busqueda'>¿Quieres buscar pokemons?</NavLink>

            {
                cargando
                ?
                    <h1>Cargando...</h1>
                    :
                    <div>
                    <Cards results={data.results}/>

                        <button onClick={()=>setUrl(data.previous)} className='m-2 btn btn-dark'>Anterior</button>
                        <button onClick={()=>setUrl(data.next)} className='m-2 btn btn-dark'>Siguiente</button>
                    </div>

            }
        </div>
    )
}

export default Pokemones