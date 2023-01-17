import React, {useContext, useEffect, useState} from "react";
import UseFetch from "./UseFetch.jsx";
import useFetch from "./UseFetch.jsx";
import Pokemon from "./Pokemon.jsx";
import {Link, NavLink} from "react-router-dom";
import FavContext from "../Context/FavContext.jsx";

const CardPokemon = ({url}) => {

    //Almacenamos el pokemon y sus propiedades
    const [pokemon,setPokemon] = useState()
    const estado = useFetch(url)
    const {cargando,data}=estado
    const heart = "❤️"

    const getPokemon = async () => {

        try {
            const results = await fetch(url);
            const data = await results.json();
            setPokemon(data)
        } catch {
            console.log('error')
        }

    }
    useEffect(()=>{
        getPokemon()
    })

    const clickHeart = (e) => {
        e.preventDefault();
        console.log('favorito el pokemon',pokemon.name)
        // No se me actualiza los pokemons
    };


    return(
        <div>
            {/*Si todavia no ha cargado y cargando es true que imprima cargando */}
            {/*y cuando termine de cargar imprime lo otro*/}
            {
                cargando
                ?
                    <h1>Cargando</h1>
                    :
                    <div className='cards' style={{width:'14rem'}}>
                        <div className='cards-header'>
                            <h5 className='card-title'>Nº{data.id} </h5>
                        </div>
                        <div className='card-body'>
                            <img src={data.sprites.front_default} alt="pokemon"/>
                        </div>
                        <div className='card-footer'>
                            <p className='card-text text-capitalize'> {data.forms[0].name} </p>
                        </div>
                        <button onClick={clickHeart} className="pokemon-heart-btn">
                            <div className="pokemon-favorite">{heart}</div>
                        </button>
                        {/*Le paso la id por parametro get*/}
                        <Link to={`/pokemon/${data.id}`}>Ver detalles</Link>
                        <br/>
                        <br/>
                    </div>
            }
        </div>
    )
}
export default CardPokemon