import React from 'react'
import { Text, SafeAreaView } from 'react-native'
import styles from './SplashScreenStyle'
import { Helpers } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <SafeAreaView style={[Helpers.fillRowCenter, styles.container]}>
        <SafeAreaView style={[Helpers.center, styles.logo]}>
          {/* You will probably want to insert your logo here */}
          <Text>LOGO</Text>
        </SafeAreaView>
      </SafeAreaView>
    )
  }
}
