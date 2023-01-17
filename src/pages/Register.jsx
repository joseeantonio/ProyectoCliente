




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import { useUserContext } from '../Context/UserContext.jsx'

const Login = () => {

    //Creamos los valores predeterminados para los campos del formulario
    const datosInitialState = {
        name: '',
        email: '',
        pass: '',
    }

    //definimos varios valores para modificarlos y guardarlos con el usestate
    const { user, setUser } = useUserContext()
    const [users, setUsers] = useState([])
    const [datos, setDatos] = useState(datosInitialState)
    const [error, setError] = useState(null)
    const navigate = useNavigate()

    //Validamos los datos y si son validos hace la siguiente funcion
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

    //Le damos el aviso al usuario de que esta registrado con la herramienta que nos da react 'swal'
    //Guardamos los datos , modificamos valores y redirigimos
    const registrar = async () => {
        console.log('Registrando...')
        Swal.fire({
            text: 'Usuario registrado con exito',
        })

        setUsers([...users, datos])
        setDatos(datosInitialState)
        localStorage.setItem("user",datos.name)
        localStorage.setItem("email",datos.email)
        localStorage.setItem("password",datos.pass)

        // console.log(datos.name)
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
    const iniciarSesion=() =>{
        navigate('/login')
    }

    return (
        <div className='mt-5'>
            <h3 className='text-center'>Registro</h3>
            <hr />
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-8 col-md-6 col-xl-4'>
                    <form onSubmit={procesarDatos}>
                        {error && <div className='alert alert-danger'>{error}</div>}

                        <input
                            placeholder='Introduce el nombre'
                            className='form-control mb-2'
                            name='name'
                            type='text'
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

