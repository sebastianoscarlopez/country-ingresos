import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import { vw, vh } from 'App/Helpers/DimensionsHelper'
export default StyleSheet.create({
  button: {
    ...Helpers.backgroundReset,
    ...Helpers.fillRow,
  },
  iconContainer: {
    width:vw(35),
    alignSelf: 'center',
  },
  icon: {
    alignSelf: 'center',
    flex:1,
    width:vw(25),
    height:vw(25),
  },
  text: {
    flexDirection: 'column',
    flex: 1,
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
