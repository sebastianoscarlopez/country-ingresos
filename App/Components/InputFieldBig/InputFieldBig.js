import React from 'react'
import { TextInput } from 'react-native'
import styles from './InputFieldBigStyle.js'

export default ({ label }) => {
    return (
        <TextInput placeholder={label} style={styles.input}></TextInput>
    )
}
