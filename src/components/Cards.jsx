import React from "react";
import CardPokemon from "./CardPokemon.jsx";

const Cards = ({results}) => {


    //Este componente recibe la lista de los pokemons con su nombre y su url,
    //y lo que hacemos es recorrerlo he ir sacando el nombre y le pasamos al siguiente componente la url para ver detalles

    return (
        <div className='card-listaPokemon container'>
                {
                    results.map(p=>(
                        <li className='card-item' key={p.name}>
                            <CardPokemon url={p.url}/>
                        </li>
                    ))
                }
        </div>
    )

}


export default Cards