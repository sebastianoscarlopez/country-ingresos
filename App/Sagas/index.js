import { takeLatest, all, debounce } from 'redux-saga/effects'

import { GlobalTypes } from 'App/Stores/Global/Actions'
import { searchOwners } from './GlobalSaga'

import { UserTypes } from 'App/Stores/User/Actions'
import { fetchStatus, register, login, getVisits, fetchUser } from './UserSaga'

import { StartupTypes } from 'App/Stores/Startup/Actions'
import { startup } from './StartupSaga'

import { NavigatorTypes } from 'App/Stores/Navigator/Actions'
import { navigate } from './NavigatorSaga'

export default function* root() {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(UserTypes.FETCH_STATUS, fetchStatus),
    takeLatest(UserTypes.REGISTER, register),
    takeLatest(UserTypes.LOGIN, login),
    takeLatest(UserTypes.GET_VISITS, getVisits),
    debounce(500, GlobalTypes.SEARCH_OWNERS, searchOwners),
    takeLatest(NavigatorTypes.NAVIGATE, navigate),
    takeLatest(UserTypes.FETCH_USER, fetchUser),
  ])
}
