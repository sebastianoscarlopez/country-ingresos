import React, { useState, useEffect, useCallback } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { SafeAreaView, Text, Keyboard } from 'react-native'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import GlobalActions from 'App/Stores/Global/Actions'
import { Helpers, Fonts } from 'App/Theme'
import { Modal, Button } from 'App/Components'
import { Colors, Images } from 'App/Theme'

const RootScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const isError = useSelector(({ global: { isError } }) => isError)
  const message = useSelector(({ global: { message } }) => message)

  const dispatch = useDispatch()
  const cleanMessage = useCallback(() => dispatch(GlobalActions.setMessage('', false)), [dispatch])

  useEffect(() => {
    setModalVisible(message.length > 0)
  }, [message])

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => dispatch(GlobalActions.setIsKeyboardVisible(true)))
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => dispatch(GlobalActions.setIsKeyboardVisible(false)))

    return () => {
      keyboardDidHideListener.remove()
      keyboardDidShowListener.remove()
    }
  }, [dispatch])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
      <Modal visible={modalVisible}>
        <View style={{ backgroundColor: Colors.white, margin: 50, padding: 20, marginTop: 200 }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={{ ...Fonts.normal, marginBottom: 50, color: isError ? Colors.error : Colors.success }}>{message}</Text>
            <Button style={{ backgroundColor: isError ? Colors.error : Colors.success }} onPress={cleanMessage}>
              ACEPTAR
            </Button>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  )
}
export default RootScreen
