import {useEffect, useState} from "react";

const UseFetch = (url) => {

    //Le damos valores por defecto
    const [resultado,setResultado] = useState({cargando:true,data:null})

    //Primero cogemos los datos
    useEffect(()=>{
        getDatos(url)
    },[url])

    async function getDatos(url) {
        try {
            setResultado({cargando:true,data:null})
            const resp = await fetch(url)
            const data = await resp.json()


            //Cambiamos los valores ,una vez que tengamos los datos
            setResultado({cargando:false,data})
        }catch (e){
            console.log(e)
        }
    }
    return resultado

}

export default UseFetch