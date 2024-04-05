
import axios from "axios";


// CONST para acceder al API de BACKEND
const CLIENTE_BASE_REST_API_URL = "http://localhost:8080/api/v1/clientes";

class ClienteService {


    /* Listar CLIENTES */
    getAllClientes(){

        return axios.get(CLIENTE_BASE_REST_API_URL);
    }


    /* Insertar CLIENTES */
    createClientes(clienteX){

        return axios.post(CLIENTE_BASE_REST_API_URL, clienteX);
    }


    /* Obtner datos y cargarlo en el formulario*/
    getClienteXid(clienteId){

        return axios.get(CLIENTE_BASE_REST_API_URL + '/' + clienteId);
    }


    /* Actualizar cliente */
    actualizarCliente(clienteId, clienteX){

        return axios.put(CLIENTE_BASE_REST_API_URL + '/' + clienteId, clienteX);
    }


    /* Elimianr cliente */
    eliminarCliente(clienteId){

        return axios.delete(CLIENTE_BASE_REST_API_URL + '/' + clienteId);
    }



}

export default new ClienteService();