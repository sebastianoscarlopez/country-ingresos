import { put, call, all } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import GlobalActions from 'App/Stores/Global/Actions'
import { userService } from 'App/Services/UserService'
import { msgWaitingEmailConfirmation, msgGenericError, msgInvalidUser, msgInvalidPassword } from 'App/Assets/Strings'

export function* removeVisit({ idApp, id }) {
  const { result } = yield call(userService.removeVisit, idApp, id)
  const actions = {
    OK: () => getVisits({ idApp }),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}

export function* addVisit({ data }) {
  const { result, message } = yield call(userService.addVisit, data)
  const actions = {
    OK: () => NavigationService.navigateAndReset('VisitListScreen'),
    MESSAGE: () => put(GlobalActions.setMessage(message, true)),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}

export function* getVisits({ idApp }) {
  const { result, visitsData } = yield call(userService.getVisits, idApp)
  const actions = {
    OK: () => put(UserActions.setVisitsData(visitsData.map((visit, index) => ({ ...visit, index })))),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}

export function* login(idApp, password) {
  const { result, isOwner } = yield call(userService.login, idApp, password)
  const actions = {
    OK: () => all([
      put(UserActions.setIsOwner(isOwner)),
      NavigationService.navigateAndReset('OptionsScreen')
    ]),
    INVALID: () => put(GlobalActions.setMessage(msgInvalidPassword, true)),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}

export function* register(idApp, document, eMail, allotment) {
  const { result } = yield call(userService.register, idApp, document, eMail, allotment)
  const actions = {
    OK: () => NavigationService.navigateAndReset('LoginScreen'),
    INVALID: () => put(GlobalActions.setMessage(msgInvalidUser, true)),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}
export function* fetchStatus({ idApp }) {
  const { result } = yield call(userService.fetchUser, idApp)

  const actions = {
    REGISTER: () => NavigationService.navigateAndReset('RegisterScreen'),
    LOGIN: () => NavigationService.navigateAndReset('LoginScreen'),
    CONFIRM: () => put(GlobalActions.setMessage(msgWaitingEmailConfirmation, true)),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}