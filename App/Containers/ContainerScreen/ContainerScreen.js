import React, { useState, Children } from 'react'
import { SafeAreaView } from 'react-native'
import styles from './ContainerScreenStyle'
import { Header } from '../../Components'
import { Helpers, Metrics, Images, Fonts, Colors } from 'App/Theme'
import LinearGradient from 'react-native-linear-gradient'

const SearchScreen = (props) => {
  const { children } = props
  const [searchFilter, setSearchFilter] = useState('')
  return (
    <SafeAreaView style={styles.screenContainer}>
      <LinearGradient
        colors={[Colors.backgroundTop, Colors.backgroundBottom]}
        style={styles.screenInnerContainer}
      >
        <Header />
        <SafeAreaView style={styles.screenInnerContainer}>{children}</SafeAreaView>
      </LinearGradient>
    </SafeAreaView>
  )
}
/*
      <LinearGradient
        colors={[Colors.backgroundTop, Colors.backgroundBottom]}
        style={styles.container}
      >
        <SafeAreaView style={styles.screenContainer}>

        </SafeAreaView>
              </LinearGradient>
*/
export default SearchScreen
