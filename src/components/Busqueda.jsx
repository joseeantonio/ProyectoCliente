import React, {useContext, useEffect, useState} from "react";
import useFetch from "./UseFetch.jsx";
import axios from "axios";
import CardPokemon from "./CardPokemon.jsx";
import data from "bootstrap/js/src/dom/data.js";
import {NavLink} from "react-router-dom";

const Busqueda = () =>{


    // const [url,setUrl] = useState('http://pokeapi.co/api/v2/pokemon')
    // const estado = useFetch(url)
    // const {cargando,data}=estado





    //Busqueda
    const [pokemonsBusqueda,setPokemonsBusqueda] = useState([])
    const [pokemons,setPokemons] = useState([])
    const [busqueda,setBusqueda] = useState('')




    const peticionGet = async ()=>{
        await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
            .then(response=>{
                setPokemons(response.data.results)
                setPokemonsBusqueda(response.data.results)
            }).catch(error=>{console.log('error')
            })
        // await axios.get('https://pokeapi.co/api/v2/type/')
        //     .then(response=>{
        //         setTipos(response.data.results)
        //     }).catch(error=>{console.log('error')
        //     })
        // // const GTipos = await fetch('https://pokeapi.co/api/v2/type/')
        // // const tipos = await GTipos.json()
        // // // console.log(tipos.results)
        // // setTipos(tipos)
        // console.log(tipos)
    }






    const handleChange=(e)=>{
        setBusqueda(e.target.value)
        console.log('Busqueda: '+e.target.value);
        buscar(e.target.value)
    }

    const buscar = (txtBusqueda)=>{
        console.log('buscando')
        const resultadobusqueda = pokemons.filter((pokemon) => {
            console.log('buscando')
            if (pokemon.name.toString().toLowerCase().includes(txtBusqueda.toLowerCase())){
                console.log(pokemon)
                return pokemon
            }
            // console.log(pokemon)
        });
        setPokemonsBusqueda(resultadobusqueda)
    }


    useEffect(()=>{
        peticionGet()
    },[])



    return(
        <div>



            <NavLink to='/filtros'>¿Quieres buscar pokemons por filtros?</NavLink>

            {/*<button onClick={()=>filtrar('borrar')} >Mostrar todos</button>*/}

            <br/>
            <br/>
            <input value={busqueda}
                onChange={handleChange}
                   placeholder='Buscar por nombre'
            />

            <div className='container'>
                <ul className='cards'>
                    {pokemonsBusqueda &&
                        pokemonsBusqueda.map((p)=>(

                            <li className='card-item' key={p.name}>
                                <CardPokemon url={p.url}/>
                            </li>
                        ))
                    }
                </ul>
            </div>
            {/*<button onClick={cargarMas}>Cargar mas</button>*/}

        </div>
    )

}

export default Busqueda