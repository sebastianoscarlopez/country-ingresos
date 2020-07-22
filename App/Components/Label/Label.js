import React from 'react'
import { Text } from 'react-native'
import styles from './LabelStyle.js'

export default (props) => {
    const { children, style } = props
    return (
        <Text style={{...styles.label, style}}>{ children }</Text>
    )
}
