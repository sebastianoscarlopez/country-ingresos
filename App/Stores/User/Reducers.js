/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

const setIdApp = (state, { idApp }) => ({
  ...state,
  idApp
})

const setIsOwner = (state, { isOwner }) => ({
  ...state,
  isOwner
})

const setVisitsData = (state, { visitsData }) => ({
  ...state,
  visitsData
})

const setProfile = (state, { profile: { name, phone, allotment, allotmentOthers, eMail } }) => ({
  ...state,
  name, phone, allotment, allotmentOthers, eMail,
  lastProfile: new Date()
})

export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.SET_ID_APP]: setIdApp,
  [UserTypes.SET_IS_OWNER]: setIsOwner,
  [UserTypes.SET_VISITS_DATA]: setVisitsData,
  [UserTypes.SET_PROFILE]: setProfile,
})
