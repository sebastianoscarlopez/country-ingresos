import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { NavigatorTypes } from 'App/Stores/Navigator/Actions'
import { fetchStatus, register, login, fetchUser } from './UserSaga'
import { startup } from './StartupSaga'
import { navigate } from './NavigatorSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(UserTypes.FETCH_STATUS, fetchStatus),
    takeLatest(UserTypes.REGISTER, register),
    takeLatest(UserTypes.LOGIN, login),
    takeLatest(NavigatorTypes.NAVIGATE, navigate),
    takeLatest(UserTypes.FETCH_USER, fetchUser),
  ])
}
