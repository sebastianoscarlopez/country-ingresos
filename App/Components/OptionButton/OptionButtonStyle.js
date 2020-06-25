import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
  button: {
    ...Helpers.backgroundReset,
    ...Helpers.fillRow,
    paddingLeft: 0,
    paddingRight: 10,
  },
  iconContainer: {
    ...Helpers.fillCol,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingTop: 20,
    paddingBottom: 20,
  },
  icon: {
    ...Helpers.fillRow,
    position: 'relative',
    left: '-80%',
  },
  text: {
    flexDirection: 'column',
    flex: 1.3,
    ...Helpers.textLeft,
  },
  title: {
    ...Fonts.h3,
    ...Helpers.fillCol,
    ...Helpers.textLeft,
    alignSelf: 'flex-end',
  },
  description: {
    ...Fonts.normal,
    ...Helpers.fillCol,
    ...Helpers.textLeft,
  },
})
