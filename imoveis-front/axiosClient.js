import axios from 'axios'

const axiosClient = axios.create({
  baseURL: 'http://localhost:3100/'
})

export default axiosClient;