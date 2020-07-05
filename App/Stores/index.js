import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as GlobalReducer } from './Global/Reducers'

export default () => {
  const rootReducer = combineReducers({
    global: GlobalReducer,
    user: UserReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
