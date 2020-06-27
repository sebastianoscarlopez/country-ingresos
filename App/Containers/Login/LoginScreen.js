import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Image, SafeAreaView, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputFieldBig } from 'App/Components'
import styles from './LoginScreenStyle'
import { Images } from 'App/Theme'

const LoginScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
  const [password, setPassword] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50 }}>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
      </View>
        <View style={styles.inputContainer}>
            <InputFieldBig secureTextEntry style={styles.input} value={password} onChangeText={setPassword} rounded />
        </View>
      <View style={styles.loginContainer} >
        <Image source={Images.login} resizeMode="contain" style={styles.login} />
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen
