import React, { useState, useContext, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Image, View } from 'react-native'
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
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
      </View>
    </View>
  )
}
export default SplashScreen