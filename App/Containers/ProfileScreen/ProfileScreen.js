import React, { useState, useEffect } from 'react'
import { TextInput, Text, View, ActivityIndicator } from 'react-native'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField, Label, Header, Button } from 'App/Components'
import styles from '../ContainersStyle'
import { Colors, Images } from 'App/Theme'
import {
  nameLabel,
  lastNameLabel,
  phoneLabel,
  allotmentLabel,
  allotmentOthersLabel,
  eMailLabel,
} from 'App/Assets/Strings'
import { vh } from 'App/Helpers/DimensionsHelper'
import UserActions from 'App/Stores/User/Actions'
import NavigationService from 'App/Services/NavigationService'

const ProfileScreen = (props) => {
  const user = useSelector(({ user }) => user, shallowEqual)
  const { idApp, isOwner, name: currentName, phone: currentphone, allotment: currentAllotment, allotmentOthers: currentAllotmentOthers, eMail: currentEMail, lastProfile } = user
  const [name, setName] = useState(currentName)
  const [phone, setPhone] = useState(currentphone)
  const [allotment, setAllotment] = useState(currentAllotment.toString())
  const [allotmentOthers, setAllotmentOthers] = useState(currentAllotmentOthers.toString())
  const [eMail, setEMail] = useState(currentEMail)
  const [isLoaded, setIsLoaded] = useState(lastProfile && (Date.now() - lastProfile.getTime()) < 1000 * 60 * 60)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!isLoaded) {
      dispatch(UserActions.getProfile(idApp, isOwner))
    }
  }, [isLoaded, dispatch])
  const handlerEnviar = () => dispatch(UserActions.updateProfile(idApp, isOwner, name, phone, eMail))
  const isKeyboardVisible = useSelector(({ global: { isKeyboardVisible } }) => isKeyboardVisible)
  return (
    <>
      {isLoaded && (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          {!isKeyboardVisible && <Header icon={Images.profileHeader} text={`${name}`} />}
          <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 0, height: vh(isKeyboardVisible ? 47 : 65) }}>
            <View style={{ flexDirection: 'row', marginVertical: isKeyboardVisible ? 0 : 4 }}>
              <InputField label={nameLabel} value={name} onChangeText={setName} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: isKeyboardVisible ? 0 : 4 }}>
              <InputField label={phoneLabel} value={phone} onChangeText={setPhone} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: isKeyboardVisible ? 0 : 4 }}>
              <InputField disabled label={allotmentLabel} value={allotment} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: isKeyboardVisible ? 0 : 4 }}>
              <InputField disabled label={allotmentOthersLabel} value={allotmentOthers} />
            </View>
            <View style={{ flexDirection: 'row', marginVertical: isKeyboardVisible ? 0 : 4 }}>
              <InputField label={eMailLabel} value={eMail} onChangeText={setEMail} />
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
            <Button onPress={handlerEnviar} >GUARDAR</Button>
            <View style={{ width: 50 }} />
            <Button onPress={() => NavigationService.navigateAndReset('OptionsScreen')} style={{ backgroundColor: Colors.error }}>CANCELAR</Button>
          </View>
        </View>
      )}
      {!isLoaded && (
        <ActivityIndicator size='large' style={{ flex: 1, backgroundColor: Colors.black }} color={Colors.headerBottom} />
      )
      }
    </>
  )
}
export default ProfileScreen