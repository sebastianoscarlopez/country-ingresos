import { put, call } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import GlobalActions from 'App/Stores/Global/Actions'
import { userService } from 'App/Services/UserService'
import { msgWaitingEmailConfirmation, msgGenericError, msgInvalidUser, msgInvalidPassword } from 'App/Assets/Strings'

export function* getVisits({idApp}) {
  const { result, visitsData } = yield call(userService.getVisits, idApp)
  const actions = {
    OK: () => put(UserActions.setVisitsData(visitsData.map((visit, index) => ({...visit, index})))),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}

export function* login(idApp, password) {
  const { result, tipouser } = yield call(userService.login, idApp, password)
  const actions = {
    OK: () => {
      put(UserActions.setIsOwner(tipouser))
      NavigationService.navigateAndReset('OptionsScreen')
    },
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
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  yield put(UserActions.fetchUserFailure('Error inesperado'))
  /*
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.fetchUserLoading())

  // Fetch user informations from an API
  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    yield put(
      UserActions.fetchUserFailure('There was an error while fetching user informations.')
    )
  }
  */
}
