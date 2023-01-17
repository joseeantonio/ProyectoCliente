import React, {useEffect, useState} from "react";
import axios from "axios";
import CardPokemon from "./CardPokemon.jsx";
import {NavLink} from "react-router-dom";


const Filtros = () => {


    //Definimos los valores de los tipos
    const [filtroPokemons,setFiltroPokemons] = useState([])
    const [tipoSeleccionado,setTipoSeleccionado]=useState({
        grass: false,       //hierba
        normal: false,      //normal
        fighting: false,    //luchador
        flying: false,      //volador
        poison: false,      //veneno
        ground: false,      //tierra
        rock: false,        //roca
        bug: false,         //bicho
        ghost: false,       //fantasma
        steel: false,       //acero
        fire: false,        //fuego
        water: false,       //agua
        electric: false,    //electrico
        psychic: false,     //psiquico
        ice: false,         //hielo
        dragon: false,      //dragon
        dark: false,        //oscuro
        fairy: false,       //hada
        unknow: false,      //desconocido
        shadow: false,      //sombra
    })
    const [pokemons,setPokemons] = useState([])


    //Esto se ejecuta primero para coger todos los datos
    const peticionGet = async () => {
        const baseURL = 'https://pokeapi.co/api/v2/';
        const res = await fetch(
            `${baseURL}pokemon?limit=500&offset=0`
        );
        const data = await res.json();
        const promises = data.results.map(async pokemon => {
            const res = await fetch(pokemon.url);
            const data = await res.json();
            return data;
        });
        const results = await Promise.all(promises);
        setPokemons(results)
    }
    useEffect(()=>{
        peticionGet()
        // console.log(pokemons)
    },[])

    const handleCheckbox =(e)=>{
        //Añadimos el nombre del tipo a nuestra lista
        setTipoSeleccionado({
            ...tipoSeleccionado,
            [e.target.name]: e.target.checked
        })
        //Recorremos y comprobamos los que son del mismo tipo y añadimos a los pokemos sin borrar ninguno
        if (e.target.checked){
            const filtrarResultado = pokemons.filter(pokemon =>
                pokemon.types
                .map(type => type.type.name)
                .includes(e.target.name)
            )
            setFiltroPokemons([...filtroPokemons, ...filtrarResultado])
            console.log(filtroPokemons)
        }else {
            debugger
            const filtrarResultado = filtroPokemons.filter(pokemon =>
                !pokemon.types
                    .map(type => type.type.name)
                    .includes(e.target.name)
            )
            setFiltroPokemons([...filtrarResultado])
        }
    }

    return(
        <div>

            <NavLink to='/busqueda'>¿Quieres buscar pokemons?</NavLink>
            {/*Checkbox con los diferentes tipos de pokemon*/}
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='grass'
                    id='grass'
                />
                <label htmlFor='grass'>Planta</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='fire'
                    id='fire'
                />
                <label htmlFor='fire'>Fuego</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='bug'
                    id='bug'
                />
                <label htmlFor='bug'>Bicho</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='fairy'
                    id='fairy'
                />
                <label htmlFor='fairy'>Hada</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='dragon'
                    id='dragon'
                />
                <label htmlFor='dragon'>Dragón</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='shadow'
                    id='shadow'
                />
                <label htmlFor='shadow'>Fantasma</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='ground'
                    id='ground'
                />
                <label htmlFor='ground'>Tierra</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='normal'
                    id='normal'
                />
                <label htmlFor='normal'>Normal</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='psychic'
                    id='psychic'
                />
                <label htmlFor='psychic'>Psíquico</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='steel'
                    id='steel'
                />
                <label htmlFor='steel'>Acero</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='dark'
                    id='dark'
                />
                <label htmlFor='dark'>Siniestro</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='electric'
                    id='electric'
                />
                <label htmlFor='electric'>Eléctrico</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='fighting'
                    id='fighting'
                />
                <label htmlFor='fighting'>Lucha</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='flying'
                    id='flying'
                />
                <label htmlFor='flying'>Volador</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='ice'
                    id='ice'
                />
                <label htmlFor='ice'>Hielo</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='poison'
                    id='poison'
                />
                <label htmlFor='poison'>Veneno</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='rock'
                    id='rock'
                />
                <label htmlFor='rock'>Roca</label>
            </div>
            <div className='group-type'>
                <input
                    type='checkbox'
                    onChange={handleCheckbox}
                    name='water'
                    id='water'
                />
                <label htmlFor='water'>Agua</label>
            </div>

            <div className='card-listaPokemon container'>
                {
                    // Mostramos los que hemos filtrado
                    filtroPokemons.length ? (
                        filtroPokemons.map(pokemon => (
                            <CardPokemon url={`https://pokeapi.co/api/v2/pokemon/${pokemon.species.name}`}/>

                        ))
                    ) : (
                        // Si no hay ningun tipo de pokemon filtrado mostramos todos
                        pokemons.map(pokemon => (
                            <CardPokemon url={`https://pokeapi.co/api/v2/pokemon/${pokemon.species.name}`}/>
                        ))
                    )
                }
            </div>
        </div>
    )
}
export default Filtros