import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { NavigatorTypes } from 'App/Stores/Navigator/Actions'
import { fetchProfile, fetchUser } from './UserSaga'
import { startup } from './StartupSaga'
import { navigate } from './NavigatorSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    takeLatest(NavigatorTypes.NAVIGATE, navigate),
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.FETCH_USER, fetchUser),
    takeLatest(UserTypes.FETCH_PROFILE, fetchProfile),
  ])
}
