import React, {useContext, useEffect, useState} from "react";
import UseFetch from "./UseFetch.jsx";
import useFetch from "./UseFetch.jsx";
import Pokemon from "./Pokemon.jsx";
import {Link, NavLink} from "react-router-dom";
import FavPokemonsContext from "../Context/FavPokemonsContext.jsx";

const CardPokemon = ({url}) => {






    const [pokemon,setPokemon] = useState()
    const estado = useFetch(url)
    const {cargando,data}=estado


    console.log(pokemon)
    // const getPokemon = async () => {
    //
    //     try {
    //         const results = await fetch(url);
    //         const data = await results.json();
    //         setPokemon(data)
    //     } catch {
    //         console.log('error')
    //     }
    //
    // }
    //
    // useEffect(()=>{
    //     getPokemon()
    // })



    // if (!estado.cargando){
    //     console.log(data)
    // }
    // const { pokemon } = url;
    // const { favoritePokemons, actualizarFavPokemons } = useContext(
    //     FavPokemonsContext
    // );

    // const [favorites, setFavorites] = useState([]);
    //
    // const redHeart = "❤️";
    // const blackHeart = "🖤";
    // const heart = favoritePokemons.includes(pokemon.name) ? redHeart : blackHeart;


    const clickHeart = (e) => {
        e.preventDefault();
        console.log('fav')
    };



    // const mostrarInfo = (id) => {
    //     // console.log(id)
    //
    //
    // }


    // const { favoritePokemons, actualizarFavPokemons } = useContext(
    //     FavPokemonsContext
    // );
    //
    // const redHeart = "❤️";
    // const blackHeart = "🖤";
    // const heart = favoritePokemons.includes(pokemon) ? redHeart : blackHeart;






    return(
        <div>


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

                        {/*<button onClick={clickHeart} className="pokemon-heart-btn">*/}
                        {/*    <div className="pokemon-favorite">{heart}</div>*/}
                        {/*</button>*/}



                        <Link to={`/pokemon/${data.id}`}>Ver detalles</Link>


                        {/*<button onClick={()=>mostrarInfo(data.id)}>VER</button>*/}


                        <br/>
                        <br/>

                    </div>
            }
        </div>
    )

}

export default CardPokemon