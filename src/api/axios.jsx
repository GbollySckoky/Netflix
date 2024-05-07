import axios from 'axios'

// url 

const instance = axios.createInstance({
    baseURL: 'https://api.themoviedb.org/3'
})

export default instance