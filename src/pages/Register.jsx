// import React, {useState} from 'react'
// import {NavLink} from "react-router-dom";
//
// const Register = () => {
//
//     const [email,setEmail] = useState('');
//     const [password,setPassword] = useState('');
//     const [name,setName] = useState();
//
//
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }
//
//
//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <label for='name'>Nombre</label>
//                 <input value={name} placeholder='Jose' className='name' name='name' />
//                 <label htmlFor='email'>correo</label>
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='aaa@gmail.com' className='email' name='email'/>
//                 <label htmlFor='password'>contraseña</label>
//                 <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='********' className='password' name='password'/>
//                 <button type='submit'>Iniciar sesion</button>
//             </form>
//             <button>¿Ya tienes una cuenta? Iniciar sesion</button>
//         </>
//     )
// }
//
// export default Register




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUserContext } from '../Context/UserContext.jsx'

const Login = () => {
    const datosInitialState = {
        name: '',
        email: '',
        pass: '',
    }
    const { user, setUser } = useUserContext()
    const [users, setUsers] = useState([])
    const [datos, setDatos] = useState(datosInitialState)
    const [error, setError] = useState(null)
    const [esregistro, setEsregistro] = useState(false)

    const navigate = useNavigate()

    const procesarDatos = (e) => {
        e.preventDefault()
        const { email, pass ,name } = datos

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
        }if (!isNaN(name)) {
            setError('El nombre es incorrecto')
            return
        }
        else {
            registrar()
        }
    }

    const registrar = async () => {
        console.log('Registrando...')
        Swal.fire({
            text: 'Usuario registrado con exito',
            icon: 'success',
        })
        setUsers([...users, datos])
        setDatos(datosInitialState)
        setError(null)
        setUser(true)
        navigate('/pokemons')
    }

    const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value,
        })
    }

    const iniciarSesion=() =>{
        navigate('/login')
    }

    return (
        <div className='mt-5'>
            <h3 className='text-center'>{esregistro ? 'Registro' : 'Login'}</h3>
            <hr />
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
                    <form onSubmit={procesarDatos}>
                        {error && <div className='alert alert-danger'>{error}</div>}

                        <input
                            placeholder='Introduce el nombre'
                            className='form-control mb-2'
                            name='name'
                            type='txt'
                            onChange={(e) => handleChange(e)}
                            value={datos.name}
                        />
                        <input
                            name='email'
                            type='email'
                            className='form-control mb-2'
                            placeholder='Introduce el correo'
                            onChange={(e) => handleChange(e)}
                            value={datos.email}
                        />
                        <input
                            name='pass'
                            type='password'
                            className='form-control mb-2'
                            placeholder='Introduce la contraseña'
                            onChange={(e) => handleChange(e)}
                            value={datos.pass}
                        />
                        <button className='btn btn-lg btn-dark w-100  mb-2' type='submit'>
                            Registrar
                        </button>
                        <button
                            className='btn btn-sm btn-info w-100  mb-2'
                            onClick={() => iniciarSesion()}
                            type='button'>
                            ¿Ya tienes cuenta?
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login

