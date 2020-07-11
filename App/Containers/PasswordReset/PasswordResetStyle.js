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
  touchLogin: {
    left: (vw(100) - vh(15)) / 2,
    width: vh(15),
    height: vh(15),
  },
  login: {
    width: '100%',
    height: '100%',
  },
  legend: {
    ...Fonts.normal,
    textAlign: 'center',
    color: Colors.white,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 40,
    paddingRight: 40,
  },
  input: {
    ...Fonts.h1,
    textAlignVertical: 'center',
    alignItems: 'stretch',
    flex: 1,
    backgroundColor: Colors.black,
  },
  loginContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    paddingBottom: 40,
  },
})
