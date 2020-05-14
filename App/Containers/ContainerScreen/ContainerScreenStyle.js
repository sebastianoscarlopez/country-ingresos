import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'

export default StyleSheet.create({
    screenContainer: {
        backgroundColor: Colors.primary,
        ...Helpers.fill
    },
    screenInnerContainer: {
        ...Helpers.fill,
        ...Metrics.smallHorizontalPadding,
        ...Metrics.smallVerticalPadding
    }
 })