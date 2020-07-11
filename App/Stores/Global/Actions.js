import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setMessage: ['message', 'isError'],
  searchOwners: ['text'],
  setOwnersData: ['ownersData'],
  setIsKeyboardVisible: ['isKeyboardVisible']
})

export const GlobalTypes = Types
export default Creators
