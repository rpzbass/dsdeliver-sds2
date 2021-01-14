import axios from "axios";



//const API_URL = 'http://192.168.1.102:8080';
const API_URL =  'https://wasabidelivery.herokuapp.com'


export function fechOrders(){

    return axios(`${API_URL}/orders`);

}

export function confirmDelivery(orderID : number){

    return axios.put(`${API_URL}/orders/${orderID}/delivered`);

}


//export default para apenas para um metodo, no caso de multiplos metodos, utilizar somente o export, e no import utilizar chaves {  }