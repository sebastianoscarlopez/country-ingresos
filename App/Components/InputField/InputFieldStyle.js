import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
    container: {
       flex: 1,
       ...Helpers.crossStart,
       marginRight: Metrics.tiny,
       justifyContent: 'flex-end',
    },
    input: {
       backgroundColor: Colors.white,
       paddingLeft: 5,
       paddingTop: 0,
       paddingBottom: 0,
       width: '100%'
    },
    rounded: {
      borderColor: Colors.inputsBorder,
      borderWidth: 1,
      borderRadius: 10,
   }
 })