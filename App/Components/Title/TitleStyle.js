import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
  container: {
    ...Metrics.smallHorizontalPadding,
    backgroundColor: Colors.white,
    width: '100%'
  },
  title:{
      ...Fonts.normal,
    }
 })