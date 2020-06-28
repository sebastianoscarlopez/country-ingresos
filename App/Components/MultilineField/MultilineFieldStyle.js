import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
export default StyleSheet.create({
    container: {
       flex: 1,
       ...Helpers.crossStart,
       marginRight: Metrics.tiny,
       justifyContent: 'center',
    },
    input: {
       ...Fonts.input,
       backgroundColor: Colors.white,
       color: Colors.text,
       paddingLeft: 5,
       paddingTop: 5,
       paddingBottom: 5,
       width: '100%',
       borderColor: Colors.inputsBorder,
       borderWidth: 1,
    }
 })