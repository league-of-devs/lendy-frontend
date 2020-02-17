import Axios from 'axios'

const api = Axios.create({
  baseURL: 'https://lendy-api.devdavi.com.br',
  responseType: 'json',
  headers: {
    'Authorization': localStorage.getItem('auth_token')
  }
})

export default api