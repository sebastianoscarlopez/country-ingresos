import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import { vw, vh } from 'App/Helpers/DimensionsHelper'
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.black,
    paddingTop: 40,
  },
  logo: {
    left: (vw(100) - vh(40)) / 2,
    width: vh(40),
    height: vh(40),
  },
  login: {
    left: (vw(100) - vh(15)) / 2,
    width: vh(15),
    height: vh(15),
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  loginContainer: {
    flex: 0.4,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
})
