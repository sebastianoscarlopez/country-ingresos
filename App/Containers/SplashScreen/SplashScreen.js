import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Image, SafeAreaView, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import styles from './SplashScreenStyle'
import { Images } from 'App/Theme'

const SplashScreen = () => {
  /*
  useMemo(() => {
    if(dispatch !== undefined){
    dispatch(StartupActions.startup())
    }
  }, [])
  */
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
      </View>
    </SafeAreaView>
  )
}
export default SplashScreen