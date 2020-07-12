import { takeLatest, all, debounce } from 'redux-saga/effects'

import { GlobalTypes } from 'App/Stores/Global/Actions'
import { searchOwners } from './GlobalSaga'

import { UserTypes } from 'App/Stores/User/Actions'
import { fetchStatus, register, login, getVisits, addVisit, removeVisit, passwordReset, getProfile, updateProfile } from './UserSaga'

import { StartupTypes } from 'App/Stores/Startup/Actions'
import { startup } from './StartupSaga'

import { NavigatorTypes } from 'App/Stores/Navigator/Actions'
import { navigate } from './NavigatorSaga'

export default function* root() {
  yield all([
    takeLatest(NavigatorTypes.NAVIGATE, navigate),
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(UserTypes.FETCH_STATUS, fetchStatus),
    takeLatest(UserTypes.REGISTER, register),
    takeLatest(UserTypes.LOGIN, login),
    takeLatest(UserTypes.GET_VISITS, getVisits),
    takeLatest(UserTypes.ADD_VISIT, addVisit),
    takeLatest(UserTypes.REMOVE_VISIT, removeVisit),
    takeLatest(UserTypes.PASSWORD_RESET, passwordReset),
    takeLatest(UserTypes.GET_PROFILE, getProfile),
    takeLatest(UserTypes.UPDATE_PROFILE, updateProfile),
    debounce(500, GlobalTypes.SEARCH_OWNERS, searchOwners),
  ])
}
