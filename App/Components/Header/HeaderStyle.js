import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import { vw, vh } from 'App/Helpers/DimensionsHelper'
export default StyleSheet.create({
  button: {
    ...Helpers.backgroundReset,
    ...Helpers.fillRow,
    paddingLeft: 0,
    paddingRight: 10,
  },
  iconContainer: {
    ...Helpers.fillCol,
    flex:0.3,
    justifyContent: 'center',
    alignSelf: 'center',
    borderColor:Colors.error
  },
  icon: {
    justifyContent: 'center',
    alignSelf: 'center',
    width: vh(10),
    height: vh(10),
    borderRadius: vh(20),
    overflow: "hidden",
  },
  textContainer: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  text: {
    ...Fonts.h3,
  },
  description: {
    ...Fonts.normal,
    ...Helpers.fillCol,
    ...Helpers.textLeft,
  },
})
