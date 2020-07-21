import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
    text:{
      ...Fonts.normal,
      color: Colors.white,
      margin:15,
      fontWeight: '600'
    },
    button: {
       backgroundColor: Colors.success,
       ...Helpers.center,
       borderColor: Colors.inputsBorder,
       borderWidth: 0.2,
       borderRadius: 50
    }
 })