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

export const reducer = createReducer(INITIAL_STATE, {
  [GlobalTypes.SET_MESSAGE]: setMessage,
})
