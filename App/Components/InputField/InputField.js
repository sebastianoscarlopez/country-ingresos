import React, { forwardRef } from 'react'
import { TextInput, Text, View } from 'react-native'
import Label from '../Label/Label'
import styles from './InputFieldStyle.js'

export default forwardRef((props, ref) => {
  const { label, rounded } = props
  return (
    <View style={{ flex: 1 }}>
      <TextInput ref={ref} {...props} style={styles.input} />
      {label && <Label>{label}</Label>}
    </View>
  )
})
