import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    ...Helpers.crossStart,
    marginRight: Metrics.tiny,
  },
  input: {
    ...Fonts.big,
    textAlign: 'center',
    backgroundColor: Colors.white,
    paddingLeft: 5,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
    borderColor: Colors.inputsBorder,
    borderWidth: 0,
    borderRadius: 20,
  },
})
