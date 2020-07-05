import axios from 'axios'
import { Config } from 'App/Config'

const userApiClient = axios.create({
  baseURL: Config.API_URL,
  validateStatus: (status) => status === 200,
  responseType: 'json',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  timeout: 3000,
})

function login({idApp, password}) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('clave', password)
  const value = userApiClient
    .post('/api_login.php', params)
    .then((response) => {
      const {
        data: { error, data },
      } = response
      if (error !== 0) {
        throw response
      }

      return { result: data === 1 ? 'INVALID' : 'OK' }
    })
    .catch(function(error) {
      return { result: 'ERROR' }
    })
  return value
}

function register({idApp, document, eMail, allotment}) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('dni', document)
  params.append('email', eMail)
  params.append('lote', allotment)
  const value = userApiClient
    .post('/api_primeringreso.php', params)
    .then((response) => {
      const {
        data: { error, data },
      } = response
      if (error !== 0) {
        throw response
      }

      return { result: data === 1 ? 'INVALID' : 'OK' }
    })
    .catch(function(error) {
      return { result: 'ERROR' }
    })
  return value
}

function fetchUser(idApp) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  const value = userApiClient
    .post('/api_verifica_iddisp.php', params)
    .then((response) => {
      const {
        data: { error, data },
      } = response
      if (error !== 0) {
        throw response
      }

      return { result: ['REGISTER', 'LOGIN', 'CONFIRM'][data] }
    })
    .catch(function(error) {
      return { result: 'ERROR' }
    })
  return value
}

export const userService = {
  fetchUser,
  register,
  login
}
