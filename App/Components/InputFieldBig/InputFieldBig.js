import React from 'react'
import { TextInput } from 'react-native'
import styles from './InputFieldBigStyle.js'

export default (props) => {
    return (
        <TextInput {...props} style={styles.input}></TextInput>
    )
}
