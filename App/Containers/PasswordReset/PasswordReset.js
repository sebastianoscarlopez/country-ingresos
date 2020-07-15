import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Image, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputFieldBig, Logo } from 'App/Components'
import styles from './PasswordResetStyle'
import { Images } from 'App/Theme'
import UserActions from 'App/Stores/User/Actions'
import GlobalActions from 'App/Stores/Global/Actions'

const LoginScreen = (props) => {
  const dispatch = useDispatch()
  const idApp = useSelector(({ user: { idApp } }) => idApp)
  const isKeyboardVisible = useSelector(({ global: { isKeyboardVisible } }) => isKeyboardVisible)
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))

  const [password, setPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [newPasswordAgain, setNewPasswordAgain] = useState()

  const handlerLogin = () => {
    const action = newPassword === newPasswordAgain && newPassword.length >= 6
      ? UserActions.passwordReset(idApp, password, newPassword)
      : GlobalActions.setMessage('Nueva clave deben coincidir y deben ser más de 6 caracteres', true)
    dispatch(action)
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: isKeyboardVisible ? 0.01 : 1, paddingTop: 50 }}>
      <Logo />
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            flex: 0.6,
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <View style={styles.inputContainer}>
            <InputFieldBig
              secureTextEntry
              style={styles.input}
              placeholder={'Clave actual'}
              value={password}
              onChangeText={setPassword}
              rounded
            />
          </View>
          <View style={styles.inputContainer}>
            <InputFieldBig
              secureTextEntry
              style={styles.input}
              placeholder={'Nueva Clave'}
              value={newPassword}
              onChangeText={setNewPassword}
              rounded
            />
          </View>
          <View style={styles.inputContainer}>
            <InputFieldBig
              secureTextEntry
              style={styles.input}
              placeholder={'Nueva Clave'}
              value={newPasswordAgain}
              onChangeText={setNewPasswordAgain}
              rounded
            />
          </View>
        </View>
        <View style={styles.loginContainer}>
          <TouchableOpacity onPress={handlerLogin} style={styles.touchLogin} >
            <Image source={Images.login} resizeMode="contain" style={styles.login} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
export default LoginScreen
