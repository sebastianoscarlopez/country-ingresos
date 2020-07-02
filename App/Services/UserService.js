import axios from 'axios'
import { Config } from 'App/Config'

const userApiClient = axios.create({
  baseURL: Config.API_URL,
  validateStatus: (status) => status === 200,
  responseType: 'json',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  timeout: 3000,
})

function fetchRegister(idApp, dni, email, lote) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('dni', dni)
  params.append('email', email)
  params.append('lote', lote)
  const value = userApiClient
    .post('/api_primeringreso.php', params)
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
}
