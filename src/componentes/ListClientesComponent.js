
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import ClienteService from '../servicios/ClienteService';

// Hook useState y useEffect(permite realizar efectos secundarios en componentes de funciones)

/* Componente que LISTA todos LOS CLIENTES */

export const ListClientesComponent = () => {

    //empleadosX -> aca se guarda los datos del LISTADO DE CLIENTES
    const [clientesX, setClientes] = useState([]);


    const listarClientes = () => {

        ClienteService.getAllClientes().then(responseX => {

            setClientes(responseX.data);
            console.log(responseX.data);

        }).catch(errorX => {

            console.log(errorX);
        })
    }



    useEffect(() => {

        listarClientes()
    }, [])



    const deleteClienteX = (idclienteX) => {

        ClienteService.eliminarCliente(idclienteX).then( (responseX) => {

            listarClientes();
        
        }).catch(errorX => {

            console.log(errorX);
        })

    }



  return (

    <div className='container'>

        <h2 className='text-center'>Lista de Clientes</h2>

        <Link to='/insertar-cliente' className='btn btn-primary mb-2'>Agregar Cliente</Link>

        <table className='table table-bordered table-striped'>

            <thead>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Email</th>
                <th>Acciones</th>
            </thead>

            <tbody>
                {
                    clientesX.map(

                        clienteZ => 
                        <tr key={ clienteZ.id }>
                            <td>{ clienteZ.id }</td>
                            <td>{ clienteZ.nombre }</td>
                            <td>{ clienteZ.apellido }</td>
                            <td>{ clienteZ.email }</td>
                            <td>
                                <Link className='btn btn-info' to={ `/edit-cliente/${clienteZ.id}` }>Actualizar</Link>

                                <button style={{ marginLeft:"10px" }} className='btn btn-danger'
                                onClick={ () => deleteClienteX(clienteZ.id)}>Eliminar</button>

                            </td>
                        </tr>
                    )
                }
            </tbody>

        </table>

    </div>
  )
}


export default ListClientesComponent;
