import React from "react";
import CardPokemon from "./CardPokemon.jsx";

const Cards = ({results}) => {


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