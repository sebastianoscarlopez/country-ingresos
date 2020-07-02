import React, { useState, useRef, useEffect } from 'react'
import { TextInput, Text, TouchableHighlight, View } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { Modal, Button, MultilineField, InputField, Label } from 'App/Components'
import { Header } from '../../Components'
import styles from '../ContainersStyle'
import { Colors, Images } from 'App/Theme'
import {
  nameLabel,
  documentLabel,
  dateLabel as checkInDateLabel,
  checkInTimeLabel,
  requiredLabel,
  patentLabel,
  observationLabel,
} from 'App/Assets/Strings'
import { vh } from 'App/Helpers/DimensionsHelper'
import { TouchableOpacity } from 'react-native-gesture-handler'

const VisitScreen = (props) => {
  const now = new Date(new Date().getTime() + 30*60000)
  const minCheckInDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())
  const [name, setName] = useState('')
  const [document, setDocumentName] = useState('')
  const [checkInDate, setCheckInDate] = useState(minCheckInDate)
  const [checkInTimeText, setCheckInTimeText] = useState('')
  const [checkInDateText, setCheckInDateText] = useState('')
  const [required, setRequired] = useState(false)
  const [patent, setPatent] = useState('')
  const [observation, setObservation] = useState('')
  const [modalDateVisible, setModalDateVisible] = useState(false)
  const [modePicker, setModePicker] = useState('date')
  const refInputDate = useRef(null)
  const refInputTime = useRef(null)
  useEffect(() => {
    setCheckInDateText(
      checkInDate.toLocaleDateString('es-AR', { month: '2-digit', day: '2-digit', year: 'numeric' })
    )
    setCheckInTimeText(
      checkInDate.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })
    )
  }, [modalDateVisible])

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || checkInDate
    if(currentDate >= minCheckInDate){
      setCheckInDate(currentDate)
    }
  }
  const onFocusCheckIn = (mode, ref) => {
    ref.current.blur()
    setModePicker(mode)
    setModalDateVisible(true)
  }
  return (
    <View>
      <Modal onRequestClose={() => setModalDateVisible(false)} visible={modalDateVisible}>
        <View style={{ backgroundColor: Colors.white, margin: 50, marginTop: 200 }}>
          <DateTimePicker
            testID="dateTimePicker"
            value={checkInDate}
            mode={modePicker}
            is24Hour={true}
            display="default"
            onChange={onChangeDate}
          />
        </View>
      </Modal>
      <Header icon={Images.visitHeader} text="Visitas" />
      <View style={{ padding: 20, height: vh(70) }}>
        <View style={{ ...styles.rowContainer }}>
          <InputField label={nameLabel} value={name} onChangeText={setName} />
        </View>
        <View style={styles.rowContainer}>
          <InputField label={documentLabel} value={document} onChangeText={setDocumentName} />
        </View>
        <View style={styles.rowContainer}>
          <InputField
            ref={refInputDate}
            onFocus={onFocusCheckIn.bind(null, 'date', refInputDate)}
            label={checkInDateLabel}
            value={checkInDateText}
            focusable={false}
          />
          <View style={{ width: 50 }} />
          <InputField
            ref={refInputTime}
            onFocus={onFocusCheckIn.bind(null, 'time', refInputTime)}
            label={checkInTimeLabel}
            value={checkInTimeText}
          />
        </View>
        <View style={styles.rowContainer}>
          <Button
            textStyle={{ margin: 7 }}
            style={{ backgroundColor: required ? Colors.error : Colors.success }}
            label={requiredLabel}
            value={required}
            onPress={() => setRequired(!required)}
          >
            {required ? 'SI' : 'NO'}
          </Button>
          <View style={{ width: 50 }} />
          <InputField label={patentLabel} value={patent} onChangeText={setPatent} />
        </View>
        <View style={{ ...styles.rowContainer, marginTop: 20 }}>
          <Label>{observationLabel}</Label>
        </View>
        <View style={{ ...styles.rowContainer, marginTop: 0 }}>
          <MultilineField maxLength={200} value={observation} onChangeText={setObservation} />
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
export default VisitScreen
