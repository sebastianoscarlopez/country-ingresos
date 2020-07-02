import { put, call } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import { userService } from 'App/Services/UserService'
import { msgWaitingEmailConfirmation } from 'App/Assets/Strings'

export function* fetchProfile({ idApp }) {

  console.warn('idApp:', idApp)
  const { result } = yield call(userService.fetchUser, idApp)

  const actions = {
    REGISTER: () => NavigationService.navigateAndReset('RegisterScreen'),
    LOGIN: () => NavigationService.navigateAndReset('LoginScreen'),
    CONFIRM: () => console.error('TODO: Show message msgWaitingEmailConfirmation to user'),
    ERROR: () => console.error('TODO: Show message msgGenericError to user'),
  }

  console.warn('result:', result)
  actions[result]()
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
