import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Image, Text, View, TouchableOpacity, SafeAreaView } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputFieldBig, Logo } from 'App/Components'
import styles from './LoginScreenStyle'
import { Images } from 'App/Theme'
import UserActions from 'App/Stores/User/Actions'

const LoginScreen = (props) => {
  const dispatch = useDispatch()
  const idApp = useSelector(({ user: { idApp } }) => idApp)
  const isKeyboardVisible = useSelector(({ global: { isKeyboardVisible } }) => isKeyboardVisible)
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))

  const [password, setPassword] = useState('')

  const handlerLogin = () => dispatch(UserActions.login(idApp, password))

  return (
    <View style={styles.container}>
      {!isKeyboardVisible &&
        <View style={{ flex: 1, paddingTop: 30 }}>
          <Logo />
        </View>
      }
      <View style={{ flex: 1 }}>
        <View style={styles.inputContainer}>
          <Text style={{...styles.legend, paddingBottom:10}}>Ingrese la clave</Text>
          <InputFieldBig
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            rounded
          />
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
