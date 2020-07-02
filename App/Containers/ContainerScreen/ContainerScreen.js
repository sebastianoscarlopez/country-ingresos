import React, { useState, Children } from 'react'
import { View } from 'react-native'
import styles from './ContainerScreenStyle'
import { Helpers, Metrics, Images, Fonts, Colors } from 'App/Theme'
import LinearGradient from 'react-native-linear-gradient'

const ContainerScreen = (props) => {
  const { children } = props
  const [searchFilter, setSearchFilter] = useState('')
  return (
    <View style={styles.screenContainer}>
      <LinearGradient
        colors={[Colors.backgroundTop, Colors.backgroundBottom]}
        style={styles.screenInnerContainer}
      >
        <View style={styles.screenInnerContainer}>{children}</View>
      </LinearGradient>
    </View>
  )
}
export default ContainerScreen
