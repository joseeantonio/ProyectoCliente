import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import useFetch from "./UseFetch.jsx";

const Pokemon = () =>{

    const {id} = useParams()
    const [urlInfo,setUrlInfo] = useState(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const [urlEvoluciones,setUrlEvoluciones] = useState(`https://pokeapi.co/api/v2/evolution-chain/${id}/`)

    const estado = useFetch(urlInfo)
    const {cargando,data}=estado







    return(
        <div>
            {
                cargando
                    ?
                    <h1>Cargando</h1>
                    :


                    <div className='cards' style={{width:'14rem'}}>
                        <div className='card-body'>
                            <p>Foto por delante</p>
                            <img src={data.sprites.front_default} alt="pokemon"/>
                            <p>Foto por detras</p>
                            <img src={data.sprites.back_default} alt="pokemon"/>

                        </div>
                        <div className='card-footer'>
                            <p className='card-text text-capitalize'>Nombre : {data.forms[0].name} </p>
                            <p className='card-text text-capitalize'>Experiencia : {data.base_experience} </p>
                            <p className='card-text text-capitalize'>Altura: {data.height} </p>
                            <p className='card-text text-capitalize'>Peso: {data.weight} </p>
                        </div>



                    </div>
            }
        </div>
    )

}

export default Pokemon