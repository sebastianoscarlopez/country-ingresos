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
  touchSend: {
    left: (vw(100) - vh(20)) / 2,
    top: 0,
    width: vh(20),
    height: vh(10),
  },
  send: {
    width: '100%',
    height: '100%',
  },
  legend: {
    ...Fonts.normal,
    textAlign: 'center',
    color: Colors.white,
    backgroundColor: Colors.black
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
