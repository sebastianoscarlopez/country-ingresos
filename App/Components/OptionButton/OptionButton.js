import React from 'react'
import {View, TouchableOpacity, Text } from 'react-native'
import styles from './OptionButtonStyle.js'

export default (props) => {
    const { onPress, icon } = props
    return (
        <View
            width={100}
            height={100}
        >
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <Text style={styles.text}>{icon}</Text>
        </TouchableOpacity>
        </View>
    )
}