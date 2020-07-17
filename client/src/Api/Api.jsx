import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export const getAllTyres = () => api.get('/items')

const apis = {
    getAllTyres
}

export default apis;