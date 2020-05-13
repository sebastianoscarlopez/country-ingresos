import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  navigate: ['screenID']
})

export const NavigatorTypes = Types
export default Creators
