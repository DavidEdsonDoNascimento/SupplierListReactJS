import axios from 'axios'

const port = window.location.href.split('localhost:')[1].substring(0, 4);
export const api = axios.create({
    baseURL: `http://localhost:${port}/api`,
})