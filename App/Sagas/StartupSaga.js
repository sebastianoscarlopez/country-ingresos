import { put, select } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import { Image, Text, View, AsyncStorage } from 'react-native'
import 'react-native-get-random-values'
import { uuid } from 'uuidv4';

/**
 * The startup saga is the place to define behavior to execute when the application starts.
 */
const getIdApp = state => state.user.idApp;
const getStatus = state => state.user.status;
export function* startup() {
  let idApp = yield select(getIdApp)
  if(idApp.length === 0){
    const newIdApp = uuid()
    yield put(UserActions.setIdApp(newIdApp))
    idApp = yield select(getIdApp)
  }
  yield put(UserActions.fetchStatus(idApp))
}
