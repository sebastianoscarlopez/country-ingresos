import React from 'react'
import {View, TextInput, Text } from 'react-native'
import Label from '../Label/Label'
import styles from './InputFieldStyle.js'

export default (props) => {
    const { label, rounded } = props
    const inputStyle = {
        ...styles.input,
        ...(rounded ? styles.rounded : {})
    }
    return (
        <View style={styles.container}>
            {
                label && <Label>{label}</Label>
            }
            <TextInput style={inputStyle}></TextInput>
        </View>
    )
}
