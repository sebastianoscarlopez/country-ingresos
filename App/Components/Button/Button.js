import React from 'react'
import {TouchableOpacity, Text, SafeAreaView } from 'react-native'
import Label from '../Label/Label'
import styles from './ButtonStyle.js'

export default (props) => {
    const { onPress, style, textStyle, children, label } = props
    return (
        <SafeAreaView
            width={150}
            height={100}
        >
        <TouchableOpacity
            style={{...styles.button, ...style}}
            onPress={onPress}>
            <Text style={{...styles.text, ...textStyle}}>{children}</Text>
        </TouchableOpacity>
            { label && <Label>{label}</Label> }
        </SafeAreaView>
    )
}