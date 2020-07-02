import React, { useState } from 'react'
import { TextInput, Text, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField, Label, Header, Button } from 'App/Components'
import styles from '../ContainersStyle'
import { Colors, Images } from 'App/Theme'
import {
  nameLabel,
  lastNameLabel,
  phoneLabel,
  numberLabel,
  allotmentLabel,
  allotmentOthersLabel,
  eMailLabel,
  pictureLabel,
} from 'App/Assets/Strings'
import { vh } from 'App/Helpers/DimensionsHelper'

const ProfileScreen = (props) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [number, setNumber] = useState('')
  const [allotment, setAllotment] = useState('')
  const [allotmentOthers, setAllotmentOthers] = useState('')
  const [eMail, setEMail] = useState('')
  const [picture, setPicture] = useState('')
  return (
    <View>
      <Header icon={Images.profileHeader} text={"Nombre Completo De La Persona"} />
      <View style={{ padding: 20, height: vh(70) }}>
        <View style={{ ...styles.rowContainer }}>
          <InputField label={nameLabel} value={name} onChangeText={setName} />
        </View>
        <View style={{ ...styles.rowContainer }}>
          <InputField label={lastNameLabel} value={lastName} onChangeText={setLastName} />
        </View>
        <View style={{ ...styles.rowContainer }}>
          <InputField label={phoneLabel} value={phone} onChangeText={setPhone} />
        </View>
        <View style={{ ...styles.rowContainer }}>
          <InputField label={numberLabel} value={allotment} onChangeText={setNumber} />
        </View>
        <View style={{ ...styles.rowContainer }}>
          <InputField label={allotmentOthersLabel} value={allotmentOthers} onChangeText={setAllotmentOthers} />
        </View>
        <View style={{ ...styles.rowContainer }}>
          <InputField label={eMailLabel} value={eMail} onChangeText={setEMail} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Button>GUARDAR</Button>
        <View style={{ width: 50 }} />
        <Button style={{ backgroundColor: Colors.error }}>CANCELAR</Button>
      </View>
    </View>
  )
}
export default ProfileScreen