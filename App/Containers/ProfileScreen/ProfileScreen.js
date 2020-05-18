import React, { useState } from 'react'
import { TextInput, Text, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField, Label } from 'App/Components'
import styles from '../ContainersStyle'
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

const ProfileScreen = (props) => {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [number, setNumber] = useState('')
  const [allotment, setAllotment] = useState('')
  const [allotmentOthers, setAllotmentOthers] = useState('')
  const [eMail, setEMail] = useState('')
  const [picture, setPicture] = useState('')
  const fields = [
    [{
      label: nameLabel,
      value: name,
      updater: setName,
    },
    {
      label: lastNameLabel,
      value: lastName,
      updater: setLastName,
    }],
    [{
      label: phoneLabel,
      value: phone,
      updater: setPhone,
    },
    {
      label: numberLabel,
      value: number,
      updater: setNumber,
    }],
    [{
      label: allotmentLabel,
      value: allotment,
      updater: setAllotment,
    },
    {
      label: allotmentOthersLabel,
      value: allotmentOthers,
      updater: setAllotmentOthers,
    }],
    [{
      label: eMailLabel,
      value: eMail,
      updater: setEMail,
    }]
  ]
  return (
    <ContainerScreen>
        <View style={styles.columnContainer}>
            {
                fields.map((field, index) => {
                    return (
                        <View key={index} style={styles.rowContainer}>
                            <InputField label={field[0].label} value={field[0].value} onChangeText={field[0].updater} />
                            <View style={{width:5}}/>
                            {
                                field.length > 1 && <InputField label={field[1].label} value={field[1].value} onChangeText={field[1].updater} />
                            }
                        </View>
                    )
                })
            }
            <View style={styles.rowContainer}>
                <View style={styles.containerPicture}>
                    <Label>{pictureLabel}</Label>
                    <View style={{width:'50%', height:150, backgroundColor:'#ffffff'}}/>                
                </View>
            </View>
        </View>
    </ContainerScreen>
  )
}
export default ProfileScreen
