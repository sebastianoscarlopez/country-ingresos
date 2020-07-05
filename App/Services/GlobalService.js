import axios from 'axios'
import { Config } from 'App/Config'

const apiFetch = axios.create({
  baseURL: Config.API_URL,
  validateStatus: (status) => status === 200,
  responseType: 'json',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  timeout: 3000,
})

function searchOwners(idApp, text) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('criterio', text)
  const value = apiFetch
    .post('/api_lista_lotes.php', params)
    .then((response) => {
      const {
        data: { error, data },
      } = response
      if (error !== 0) {
        throw response
      }
      const ownersData = data.map(d => ({
        name: d.nombre,
        phone: d.telefono,
        allotment: d.lote
      }))
      return { result: data instanceof Array ? 'OK' : 'ERROR', ownersData }
    })
    .catch(function(error) {
      return { result: 'ERROR' }
    })
  return value
}

export const globalService = {
  searchOwners
}
