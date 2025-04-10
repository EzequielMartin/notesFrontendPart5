import axios from 'axios'
const baseUrl = '/api/notes'


//Agrego lo necesario para poder pasarle un token a la request de post, ya que necesita un token valido para agregar una nota
let token = null

const setToken = newToken => {
  token = `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async newObject => {
  // const request = axios.post(baseUrl, newObject)
  // return request.then(response => response.data)

  const config = {
    headers: { Authorization: token }
  }

  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { 
  getAll, create, update, setToken
}