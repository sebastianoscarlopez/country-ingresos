import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
    container: {
       flex: 1
    },
    text:{
      ...Fonts.h1,
    },
    button: {
       backgroundColor: Colors.accent,
       ...Helpers.center,
       borderColor: Colors.accent,
       borderWidth: 1,
       borderRadius: 20,
       width: '100%',
       height: '100%'
    }
 })