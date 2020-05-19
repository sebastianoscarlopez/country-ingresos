import React from 'react'
import {TouchableOpacity, Text, SafeAreaView } from 'react-native'
import styles from './ButtonStyle.js'

export default (props) => {
    const { onPress, children } = props
    return (
        <SafeAreaView
            width={100}
            height={100}
        >
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
        </SafeAreaView>
    )
}