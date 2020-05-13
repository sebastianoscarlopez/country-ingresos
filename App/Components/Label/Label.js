import React from 'react'
import { Text } from 'react-native'
import styles from './LabelStyle.js'

export default (props) => {
    const { children } = props
    return (
        <Text style={styles.label}>{ children }</Text>
    )
}
