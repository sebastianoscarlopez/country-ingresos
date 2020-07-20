import React, { useState, useEffect } from 'react'
import { TextInput, Text, View, ActivityIndicator } from 'react-native'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField, Label, Header, Button, Modal } from 'App/Components'
import styles from '../ContainersStyle'
import { Colors, Images } from 'App/Theme'
import {
  nameLabel,
  lastNameLabel,
  phoneLabel,
  allotmentLabel,
  allotmentOthersLabel,
  eMailLabel,
  msgGenericError
} from 'App/Assets/Strings'
import { vh } from 'App/Helpers/DimensionsHelper'
import UserActions from 'App/Stores/User/Actions'
import GlobalActions from 'App/Stores/Global/Actions'
import NavigationService from 'App/Services/NavigationService'
import ImagePicker from 'react-native-image-picker';

// More info on all the options is below in the API Reference... just some common use cases shown here
const options = {
  title: 'Imagen de perfil',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
}

const ProfileScreen = (props) => {
  const user = useSelector(({ user }) => user, shallowEqual)
  const { idApp, isOwner, name: currentName, phone: currentphone, allotment: currentAllotment, allotmentOthers: currentAllotmentOthers, eMail: currentEMail, profileImage: currentProfileImage, lastProfile } = user
  const [name, setName] = useState(currentName)
  const [phone, setPhone] = useState(currentphone)
  const [allotment, setAllotment] = useState(currentAllotment.toString())
  const [allotmentOthers, setAllotmentOthers] = useState(currentAllotmentOthers.toString())
  const [eMail, setEMail] = useState(currentEMail)
  const [profileImage, setProfileImage] = useState(currentProfileImage)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPickerVisible, setIsPickerVisible] = useState(false)
  const dispatch = useDispatch()
  const handlerEnviar = () => {
    setIsLoaded(false)
    dispatch(UserActions.updateProfile(idApp, isOwner, name, phone, eMail))
  }

  useEffect(() => {
    if (!isLoaded) {
      dispatch(UserActions.getProfile(idApp, isOwner))
    }
  }, [isLoaded, dispatch])
  useEffect(() => {
    setIsLoaded(true)
    setName(currentName.toString())
    setPhone(currentphone.toString())
    setAllotment(currentAllotment.toString())
    setAllotmentOthers(currentAllotmentOthers.toString())
    setEMail(currentEMail.toString())
  }, [lastProfile])

  useEffect(() => {
    setProfileImage(currentProfileImage)
  }, [currentProfileImage])

  const isKeyboardVisible = useSelector(({ global: { isKeyboardVisible } }) => isKeyboardVisible)

  const requestPicture = () => {
    setIsPickerVisible(true)
  }

  const openCamera = () => {
    ImagePicker.launchCamera(options, (response) => {
      handlerOnPickerClose(response)
    });
  }
  
  const openGallery = () => {
    ImagePicker.launchImageLibrary(options, (response) => {
      handlerOnPickerClose(response)
    });
  }

  const handlerOnPickerClose = (response) => {
    if (!response.didCancel) {
      if (!response.error) {
        const source = { uri: response.uri }
        dispatch(UserActions.setProfileImage(idApp, source))
      } else {
        dispatch(GlobalActions.setMessage(msgGenericError, true))
      }
    }
    setIsPickerVisible(false)
  }
  return (
    <>
      {isPickerVisible && (
        <Modal>
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center' }}>
              <Button style={{ backgroundColor: Colors.success }} onPress={openCamera}>📷 CAMARA</Button>
              <Button style={{ backgroundColor: Colors.success }} onPress={openGallery}>📁GALERIA</Button>
              <Button style={{ backgroundColor: Colors.error }} onPress={() => setIsPickerVisible(false)}>CANCELAR</Button>
            </View>
          </View>
        </Modal>)
      }
      {isLoaded && (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
          {!isKeyboardVisible && <Header onPressIcon={requestPicture} icon={profileImage} text={`${name}`} />}
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