import React from 'react'
import { TextInput, Text, View } from 'react-native'
import Label from '../Label/Label'
import styles from './MultilineFieldStyle.js'

export default (props) => {
    const { label, rounded } = props
    return (
        <View style={{flex:1}}>
            <TextInput style={styles.input} multiline numberOfLines={3} {...props}></TextInput>
            { label && <Label>{label}</Label> }
        </View>
    )
}
