import React from 'react'
import { Text, View } from 'react-native'
import styles from './TitleStyle.js'

export default (props) => {
    const { children } = props
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{ children }</Text>
        </View>
    )
}
