import React, { useState, useEffect, useCallback } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { SafeAreaView, Text } from 'react-native'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import GlobalActions from 'App/Stores/Global/Actions'
import { Helpers, Fonts } from 'App/Theme'
import { Modal, Button } from 'App/Components'
import { Colors, Images } from 'App/Theme'

const RootScreen = (props) => {
  const [modalVisible, setModalVisible] = useState(true)
  const isError = useSelector(({ global: { isError } }) => isError)
  const message = useSelector(({ global: { message } }) => message)
  useEffect(() => {
    setModalVisible(message.length > 0)
  }, [message])

  const dispatch = useDispatch()
  const cleanMessage = useCallback(() => dispatch(GlobalActions.setMessage('', false)), [dispatch])

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
          <View style={{ alignItems:'center' }}>
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
