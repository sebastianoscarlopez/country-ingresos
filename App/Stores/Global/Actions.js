import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  setMessage: ['message', 'isError']
})

export const GlobalTypes = Types
export default Creators
