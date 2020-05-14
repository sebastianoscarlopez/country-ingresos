import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
    text:{
      ...Fonts.normal,
    },
    button: {
       backgroundColor: Colors.success,
       ...Helpers.center,
       borderBottomColor: Colors.inputsBorder,
       borderBottomWidth: 1,
       borderTopColor: Colors.inputsBorder,
       borderTopWidth: 1,
    }
 })