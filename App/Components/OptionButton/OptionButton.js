import React from 'react'
import {View, Text } from 'react-native'
import styles from './OptionButtonStyle.js'

export default (props) => {
    return (
        <View
            style={styles.button}
            width={100}
            height={100}
            onPress={() => {}}>
                
    <Text style={styles.text}>{props.icon}</Text>
            </View>
    )
}