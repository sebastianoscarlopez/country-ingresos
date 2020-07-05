import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { GlobalTypes } from './Actions'

export const setMessage = (state, { message, isError }) => {
  return {
    ...state,
    message,
    isError,
  }
}
export const setOwnersData = (state, { ownersData }) => {
  return {
    ...state,
    ownersData
  }
}

export const reducer = createReducer(INITIAL_STATE, {
  [GlobalTypes.SET_MESSAGE]: setMessage,
  [GlobalTypes.SET_OWNERS_DATA]: setOwnersData,
})
