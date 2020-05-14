import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
    containerPicture: {
        flex: 1,
        ...Helpers.crossStart,
        marginRight: Metrics.tiny,
     },
    rowContainer: {
        flexDirection: 'row',
        ...Metrics.tinyVerticalMargin
    },
    columnContainer: {
        flexDirection: 'column',
        ...Metrics.tinyHorizontalMargin
    }
 })