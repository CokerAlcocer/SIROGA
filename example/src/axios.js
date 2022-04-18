import axios from 'axios';

const service = axios.create({
    baseURL: 'http://localhost:8080/siroga/api'
});

export default service;