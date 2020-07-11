import axios from 'axios'
import { Config } from 'App/Config'

const apiFetch = axios.create({
  baseURL: Config.API_URL,
  validateStatus: (status) => status === 200,
  responseType: 'json',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  timeout: 3000,
})

function login({ idApp, password }) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('clave', password)
  const value = apiFetch
    .post('/api_login.php', params)
    .then((response) => {
      const {
        data: { error, data, tipouser },
      } = response
      if (error !== 0) {
        throw response
      }

      return { result: data === 1 ? 'INVALID' : 'OK', isOwner: tipouser === 1 }
    })
    .catch(function (error) {
      return { result: 'ERROR' }
    })
  return value
}

function register({ idApp, document, eMail, allotment }) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('dni', document)
  params.append('email', eMail)
  params.append('lote', allotment)
  const value = apiFetch
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
    .catch(function (error) {
      return { result: 'ERROR' }
    })
  return value
}

function fetchUser(idApp) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  const value = apiFetch
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
    .catch(function (error) {
      return { result: 'ERROR' }
    })
  return value
}

function getVisits(idApp) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  const value = apiFetch
    .post('/api_lista_visitas.php', params)
    .then((response) => {
      const {
        data: { error, data },
      } = response
      if (error !== 0) {
        throw response
      }
      const visitsData = data.map(d => ({
        id: d.idregistro,
        name: d.nombre,
        dateIn: d.fecha_ingreso,
        timeIn: d.hora_ingreso
      }))
      return { result: data instanceof Array ? 'OK' : 'ERROR', visitsData }
    })
    .catch(function (error) {
      return { result: 'ERROR' }
    })
  return value
}

function addVisit({ idApp, isOwner, name, document, checkInDateText, checkInTimeText, autorization, plate, observation }) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('duenio', isOwner ? 1 : 0)
  params.append('nombre', name)
  params.append('dni', document)
  params.append('fechaingreso', checkInDateText.split('/').reverse().join(''))
  params.append('horaingreso', checkInTimeText)
  params.append('autorizacion', autorization ? 1: 0)
  params.append('patente', plate)
  params.append('obs', observation.length === 0 ? ' ' : observation)
  console.warn(params)
  const value = apiFetch
    .post('/api_frm_visitas.php', params)
    .then((response) => {
      const {
        data: { error, data, msg },
      } = response
      if (error !== 0) {
        throw response
      }
      return { result:  ['OK', 'MESSAGE', 'MESSAGE'][data], message: msg }
    })
    .catch(function (error) {
      return { result: 'ERROR' }
    })
  return value
}

function removeVisit(idApp, id) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('idregistro', id)
  const value = apiFetch
    .post('/api_visitas_delete.php', params)
    .then((response) => {
      const {
        data: { error, data },
      } = response
      if (error !== 0 || data != 0) {
        throw response
      }

      return { result: 'OK' }
    })
    .catch(function (error) {
      return { result: 'ERROR' }
    })
  return value
}

function passwordReset({ idApp, password, newPassword }) {
  const params = new URLSearchParams()
  params.append('idapp', idApp)
  params.append('claveanterior', password)
  params.append('clavenueva', newPassword)
  const value = apiFetch
    .post('/api_frm_cambia_clave.php', params)
    .then((response) => {
      const {
        data: { error, data, tipouser },
      } = response
      if (error !== 0) {
        throw response
      }

      return { result: data === 1 ? 'INVALID' : 'OK' }
    })
    .catch(function (error) {
      return { result: 'ERROR' }
    })
  return value
}

export const userService = {
  fetchUser,
  register,
  login,
  getVisits,
  addVisit,
  removeVisit,
  passwordReset
}
