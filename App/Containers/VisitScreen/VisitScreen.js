import React, { useState } from 'react'
import { TextInput, Text, SafeAreaView } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField, Label } from 'App/Components'
import styles from '../ContainersStyle'
import {
  nameLabel,
  documentLabel,
  dateLabel,
  checkInTimeLabel,
  requiredLabel,
  patentLabel,
  observationLabel
} from 'App/Assets/Strings'

const VisitScreen = (props) => {
  const [name, setName] = useState('')
  const [document, setDocumentName] = useState('')
  const [date, setDate] = useState('')
  const [checkInTime, setCheckInTime] = useState('')
  const [required, setRequired] = useState('')
  const [patent, setPatent] = useState('')
  const [observation, setObservation] = useState('')
  const fields = [
    [{
      label: nameLabel,
      value: name,
      updater: setName,
    },
    {
      label: documentLabel,
      value: document,
      updater: setDocumentName,
    }],
    [{
      label: dateLabel,
      value: date,
      updater: setDate,
    },
    {
      label: checkInTimeLabel,
      value: checkInTime,
      updater: setCheckInTime,
    }],
    [{
      label: requiredLabel,
      value: required,
      updater: setRequired,
    },
    {
      label: patentLabel,
      value: patent,
      updater: setPatent,
    },
    {
      label: observationLabel,
      value: observation,
      updater: setObservation,
    }]
  ]
  return (
    <ContainerScreen>
        <SafeAreaView style={styles.columnContainer}>
            {
                fields.map((field, index) => {
                    return (
                        <SafeAreaView key={index} style={styles.rowContainer}>
                            <InputField placeholder={field[0].label} value={field[0].value} onChangeText={field[0].updater} />
                            <SafeAreaView style={{width:5}}/>
                            {
                                field.length > 1 && <InputField placeholder={field[1].label} value={field[1].value} onChangeText={field[1].updater} />
                            }
                        </SafeAreaView>
                    )
                })
            }
            <SafeAreaView style={styles.rowContainer}>
                <SafeAreaView style={styles.containerPicture}>
                    <Label>{observationLabel}</Label>
                    <SafeAreaView style={{width:'100%', height:150, backgroundColor:'#ffffff'}}/>                
                </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    </ContainerScreen>
  )
}
export default VisitScreen
