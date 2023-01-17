import React, { useState} from "react";
import useFetch from "./UseFetch.jsx";
import Cards from "./Cards.jsx";
import {Link, NavLink} from "react-router-dom";

const Pokemones = () => {

    const [url,setUrl] = useState('http://pokeapi.co/api/v2/pokemon')
    const estado = useFetch(url)
    const {cargando,data}=estado



    const [hora,setHora] = useState()

    //Funcion de la hora
    const mueveReloj=()=>{
        const momentoActual= new Date()
        const hora = momentoActual.getHours()
        const minuto = momentoActual.getMinutes()
        const segundo = momentoActual.getSeconds()

        const horaFinal = hora + " : " + minuto + " : " + segundo
        setHora(horaFinal)
    }
    setInterval(mueveReloj,1000)




    return(
        <div>
            <p>Hora actual -> {hora}</p>

            <h1>Esta es la pagina de pokemon</h1>

            {/*Mando para otra pagina donde esta la busqueda*/}
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