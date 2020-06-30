import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  fetchProfile: ['id']
})

export const StartupTypes = Types
export default Creators
