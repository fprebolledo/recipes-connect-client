import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.BASE_API_URL,
  headers: {
    'Content-type': 'application/json'
  }
})

export default apiClient
