import React, { forwardRef } from 'react'
import { TextInput, Text, View, Keyboard, ColorPropType  } from 'react-native'
import Label from '../Label/Label'
import styles from './InputFieldStyle.js'
import { Colors } from 'App/Theme'

export default forwardRef((props, ref) => {
  const { label, rounded, required, disabled } = props
  return (
    <View style={{ flex: 1 }}>
      <TextInput ref={ref} {...props} style={{ ...styles.input, color: disabled ? Colors.disabled : Colors.text }}/>
      {label && <Label>{label}{required && <Text style={{color:Colors.error}}> *</Text>}</Label>}
    </View>
  )
})
