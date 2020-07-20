import { Images } from 'App/Theme'
/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = {
  idApp: '',
  status: 'initial',
  userIsLoading: true,
  userErrorMessage: 'hola',
  name: '',
  phone: '',
  allotment: '',
  allotmentOthers: '',
  eMail: '',
  profileImage: Images.profileHeader,
  lastProfile: 0
}
