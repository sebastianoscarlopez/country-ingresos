import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Image, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import styles from './StartupScreenStyle'
import { Images } from 'App/Theme'
import { Logo } from 'App/Components'

import StartupActions from 'App/Stores/Startup/Actions'

const StartupScreen = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(StartupActions.startup())
  }, [dispatch])
  
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Logo />
      </View>
    </View>
  )
}
export default StartupScreen
