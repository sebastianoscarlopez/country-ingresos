import { put, call, select } from 'redux-saga/effects'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import GlobalActions from 'App/Stores/Global/Actions'
import { globalService } from 'App/Services/GlobalService'
import {
  msgWaitingEmailConfirmation,
  msgGenericError,
  msgInvalidUser,
  msgInvalidPassword,
} from 'App/Assets/Strings'

const getIdApp = (state) => state.user.idApp
export function* searchOwners({text}) {
  let idApp = yield select(getIdApp)
  const { result, ownersData } = yield call(globalService.searchOwners, idApp, text)
  const actions = {
    OK: () => put(GlobalActions.setOwnersData(ownersData)),
    ERROR: () => put(GlobalActions.setMessage(msgGenericError, true)),
  }

  yield actions[result]()
}
