// import React, {useState} from 'react'
// import {NavLink} from "react-router-dom";
//
// const Login = () => {
//
//     const [miLogin,setMiLogin] = useState('false');
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');
//
//     const iniciarSesion = (e) => {
//         e.preventDefault();
//         console.log(email);
//         const email = document.getElementById('email').value;
//         const password = document.getElementById('password').value;
//         if (password.length<6 || password.length>12){
//             alert('La contraseña debe tener entre 6 y doce caracteres.');
//         }else {
//             if (email === 'admin@admin.com' && password==='123456789'){
//                 setMiLogin('true');
//                 document.getElementById('formularioLogin').style.display = 'none';
//             }else {
//                 setMiLogin('false');
//                 alert('Error de usuario o contraseña');
//                 document.getElementById('email').value = '';
//                 document.getElementById('password').value = '';
//                 document.getElementById('email').focus();
//
//             }
//         }
//     }
//
//
//     return (
//         <>
//             <form id='formularioLogin'>
//                 <label for='email'>correo</label>
//                 <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='aaa@gmail.com' id='email' name='email' />
//                 <label htmlFor='password'>correo</label>
//                 <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='********' id='password' name='password'/>
//                 <button type='submit'>Iniciar sesion</button>
//             </form>
//             <button>¿No tienes cuenta? Registrate ahora</button>
//         </>
//     )
// }
//
// export default Login


import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUserContext } from '../Context/UserContext.jsx'
import register from "./Register.jsx";

const Login = () => {
    const datosInitialState = {
        email: '',
        pass: '',
    }
    const { user, setUser } = useUserContext()
    const [users, setUsers] = useState([])
    const [datos, setDatos] = useState(datosInitialState)
    const [error, setError] = useState(null)
    const [esregistro, setEsregistro] = useState(false)

    const navigate = useNavigate()

    //Validamos los datos y si son validos hace la siguiente funcion
    const procesarDatos = (e) => {
        e.preventDefault()
        const { email, pass } = datos
        const expRegEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/

        if (!email.trim()) {
            setError('Escribe un email')
            return
        }
        if (!pass.trim()) {
            setError('Escribe una password')
            return
        }
        if (pass.length < 6) {
            setError('Escribe una contraseña de 6 o mas carácteres')
            return
        }if (expRegEmail.test(email)) {
            iniciarSesion()
        }else {
            setError('Escribe un correo correcto')
            return
        }
    }

    //Le damos el aviso al usuario de que esta registrado con la herramienta que nos da react 'swal'
    //Guardamos los datos , modificamos valores y redirigimos
    const iniciarSesion = async () => {
        console.log('Iniciando sesion')
        Swal.fire({
            text: 'Iniciado sesion con exito',
        })

        setUsers([...users, datos])
        setDatos(datosInitialState)
        localStorage.setItem("email",datos.email)
        localStorage.setItem("password",datos.pass)

        // console.log(datos.email)
        // console.log(datos.pass)
        setError(null)
        setUser(true)
        navigate('/pokemons')
    }

    //Guardamos los valores de los input
    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        })
    }

    //Redirigimos a el formulario de registro
    const register = () =>{
        navigate('/register')
    }


    return (
        <div className='mt-5'>
            <h3 className='text-center'>Login</h3>
            <hr />
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
                    <form onSubmit={procesarDatos}>
                        {error && <div className='alert alert-danger'>{error}</div>}
                        <input
                            name='email'
                            type='txt'
                            className='form-control mb-2'
                            placeholder='Introduce el email'
                            onChange={(e) => handleChange(e)}
                            value={datos.email}
                        />
                        <input
                            name='pass'
                            type='password'
                            className='form-control mb-2'
                            placeholder='Introduce el password'
                            onChange={(e) => handleChange(e)}
                            value={datos.pass}
                        />
                        <button className='btn btn-lg btn-dark w-100  mb-2' type='submit'>
                            Login
                        </button>
                        <button
                            className='btn btn-sm btn-info w-100  mb-2'

                            type='button'
                        onClick={()=>{
                            register()
                        }}>
                            ¿No tienes cuenta?
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

