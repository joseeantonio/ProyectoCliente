import React, {useContext, useEffect, useState} from "react";
import useFetch from "./UseFetch.jsx";
import axios from "axios";
import CardPokemon from "./CardPokemon.jsx";
import data from "bootstrap/js/src/dom/data.js";
import {NavLink} from "react-router-dom";

const Busqueda = () =>{
    //Busqueda
    const [pokemonsBusqueda,setPokemonsBusqueda] = useState([])
    const [pokemons,setPokemons] = useState([])
    const [busqueda,setBusqueda] = useState('')

    //Cogemos los pokemons de la api
    const peticionGet = async ()=>{
        await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`)
            .then(response=>{
                setPokemons(response.data.results)
                setPokemonsBusqueda(response.data.results)
            }).catch(error=>{console.log('error')
            })
    }
    useEffect(()=>{
        peticionGet()
    },[])

    //Cogemos los datos al momento que escribimos y hacemos la funcion de buscar
    const handleChange=(e)=>{
        setBusqueda(e.target.value)
        // console.log('Busqueda: '+e.target.value);
        buscar(e.target.value)
    }

    const buscar = (txtBusqueda)=>{
        const busqueda = txtBusqueda
        if (!isNaN(txtBusqueda)){
            const resultadobusqueda = pokemons.filter((pokemon) => {
                // console.log('buscando')
                const split = pokemon.url.split("/")
                // console.log(split)
                const idPokemon = split[6]
                // console.log(idPokemon)
                // debugger
                if (idPokemon===busqueda){
                    console.log(pokemon)
                    return pokemon
                }
                // console.log(pokemon)
            });
            setPokemonsBusqueda(resultadobusqueda)
        }else {
            const resultadobusqueda = pokemons.filter((pokemon) => {
                // console.log('buscando')
                if (pokemon.name.toString().toLowerCase().includes(busqueda.toLowerCase())){
                    // console.log(pokemon)
                    return pokemon
                }
                // console.log(pokemon)
            });
            setPokemonsBusqueda(resultadobusqueda)
        }
        // console.log('buscando')
    }



    return(
        <div>

            <NavLink to='/pokemons'>Volver</NavLink>
            {/*Mando a una pagina donde esta para filtrar por tipos*/}
            <NavLink to='/filtros'>¿Quieres buscar pokemons por filtros?</NavLink>

            <br/>
            <br/>
            <input
                type="search"
                value={busqueda}
                onChange={handleChange}
                   placeholder='Buscar por nombre o por id '
            />

            <div className='container'>
                <ul className='card-listaPokemon container'>
                    {pokemonsBusqueda &&
                        pokemonsBusqueda.map((p)=>(
                            <li className='card-item' key={p.name}>
                                <CardPokemon url={p.url}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )

}

export default Busqueda