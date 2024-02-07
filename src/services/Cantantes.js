import axios from "axios"

export const obtenerCantantes = async () => {    
    const $data = await axios.get(process.env.REACT_APP_API_URL + "cantantes");
    return $data;
}