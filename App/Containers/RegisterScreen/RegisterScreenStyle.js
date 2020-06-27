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
    left: (vw(100) - vh(30)) / 2,
    width: vh(30),
    height: vh(30),
  },
  send: {
    left: (vw(100) - vh(20)) / 2,
    top: 50,
    width: vh(20),
    height: vh(20),
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
  sendContainer: {
    flex: 0.4,
    justifyContent: 'flex-end',
  },
})
