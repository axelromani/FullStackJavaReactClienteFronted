

import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClienteService from '../servicios/ClienteService';

export const InsertarClientesComponent = () => {
    
    // Atributos Inicializdo en vacio!

    const [nombre, setNombreX] = useState('');
    const [apellido, setApellidoX] = useState('');
    const [email, setEmailX] = useState('');

    const navigateX = useNavigate();

    //sirve para utilizar la constante como parametro - esto relacion a "getClienteXid()"
    const {id} = useParams();


    //metodo implementa funcion lamda
    const guardarOrActualizarCliente = (ev) => {

        ev.preventDefault();

        const clienteZ = { nombre, apellido, email };


        //si el "id" NO es nulo

        if(id){

            ClienteService.actualizarCliente(id, clienteZ).then( (responseX) => {

                console.log(responseX.data)
                
                navigateX('/clientes');
            
            }).catch(errorX => {
    
                console.log(errorX);
            })
        
        } else { // si el ID es nulo

            ClienteService.createClientes(clienteZ).then( (responseX) => {

                console.log(responseX.data)
                
                navigateX('/clientes');
            
            }).catch(errorX => {
    
                console.log(errorX);
            })
        }



        
    }

    /* useEffect() -> Voy a cargar datos del FORMULARIO por eso utilizo el useEffect para efecto secundario*/
    
    useEffect( () => {

        //Obtengo resultados y esablezco valores 
        ClienteService.getClienteXid(id).then( (responsez) => {

            setNombreX(responsez.data.nombre);
            setApellidoX(responsez.data.apellido);
            setEmailX(responsez.data.email);
        
        }).catch(errorX => {

            console.log(errorX);
        })
    },[])


    /* Metodo Modificar TITULO */

    const titleX = () => {

        if(id){ // si el "id" por defecto tiene valor

            return <h2 className='text-center'>actualizar cliente</h2>

        } else {// si el "id" por defecto es cero

            return <h2 className='text-center'>agregar cliente</h2>
        }
    }



  return (

    <div>

        <div className='container'>
            <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                <h2 className='text-center'>{ titleX() }</h2>
                <div className='card-body'>
                    <form>

                        <div className='form-group mb-2'>

                            <label className='form-label'>Nombre</label>
                            
                            <input
                                type='text'
                                placeholder='Digite su Nombre'
                                name='nombreX'
                                className='form-control'
                                value={ nombre }
                                onChange = { (eve) => setNombreX(eve.target.value) }
                            />
                        </div>

                        <div className='form-group mb-2'>

                            <label className='form-label'>Apellido</label>
                            
                            <input
                                type='text'
                                placeholder='Digite su Apellido'
                                name='apellidoX'
                                className='form-control'
                                value={ apellido }
                                onChange = { (eve) => setApellidoX(eve.target.value) }
                            />
                        </div>

                        <div className='form-group mb-2'>

                            <label className='form-label'>Email</label>
                            
                            <input
                                type='email'
                                placeholder='Digite su Email'
                                name='emailX'
                                className='form-control'
                                value={ email }
                                onChange = { (eve) => setEmailX(eve.target.value) }
                            />
                        </div>

                        <button className='btn btn-success' onClick={ (even) => guardarOrActualizarCliente(even) }>Guardar</button>
                        &nbsp;&nbsp;
                        <Link to='/clientes' className='btn btn-danger'>Cancelar</Link>

                    </form>
                </div>
            </div>    
            </div>
        </div>

    </div>
  )
}

export default InsertarClientesComponent;
