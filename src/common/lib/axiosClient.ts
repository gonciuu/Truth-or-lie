import axios from 'axios'

const client = axios.create({
  baseURL: 'https://api.truthordarebot.xyz',
  headers: {
    'Content-Type': 'application/json',
    'accept-encoding': '*',
  },
  method: 'GET',
})

export default client
