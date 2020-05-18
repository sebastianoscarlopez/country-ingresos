import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
  container: {
    ...Metrics.smallHorizontalPadding,
    paddingLeft: 0,
    flexDirection: 'row',
    backgroundColor: Colors.white,
    width: '100%'
  },
  title:{
    marginLeft: 5,
    ...Fonts.normal,
  },
  button:{
    marginLeft: 5,
    paddingBottom: 10,
    ...Fonts.h3,
  }
 })