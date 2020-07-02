import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Image, Text, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputFieldBig } from 'App/Components'
import styles from './LoginScreenStyle'
import { Images } from 'App/Theme'

import StartupActions from 'App/Stores/Startup/Actions'

const LoginScreen = (props) => {
  const dispatch = useDispatch()
  const status = useSelector((state) => {
    return state.user.status
  })
  useEffect(() => {
    dispatch(StartupActions.startup())
  }, [dispatch])

  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
  const [password, setPassword] = useState()
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
        <Text style={{ color: 'white' }}>{(!!status).toString()}</Text>
      </View>
      {status==='ready' && (
        <View style={{ flex: 1 }}>
          <View style={styles.inputContainer}>
            <InputFieldBig
              secureTextEntry
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              rounded
            />
          </View>
          <View style={styles.loginContainer}>
            <Image source={Images.login} resizeMode="contain" style={styles.login} />
          </View>
        </View>
      )}
    </View>
  )
}
export default LoginScreen
