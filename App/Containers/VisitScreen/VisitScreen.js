import React, { useState, useRef, useEffect } from 'react'
import { TextInput, Text, TouchableHighlight, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
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
  plateLabel,
  observationLabel,
} from 'App/Assets/Strings'
import { vh } from 'App/Helpers/DimensionsHelper'
import { TouchableOpacity } from 'react-native-gesture-handler'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'

const VisitScreen = (props) => {
  const { idApp, isOwner } = useSelector(({ user: { idApp, isOwner } }) => ({ idApp, isOwner }))
  const isKeyboardVisible = useSelector(({ global: { isKeyboardVisible } }) => isKeyboardVisible)
  const now = new Date(new Date().getTime() + 30 * 60000)
  const minCheckInDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes())
  const [name, setName] = useState('')
  const [document, setDocumentName] = useState('')
  const [checkInDate, setCheckInDate] = useState(minCheckInDate)
  const [checkInTimeText, setCheckInTimeText] = useState('')
  const [checkInDateText, setCheckInDateText] = useState('')
  const [autorization, setAutorization] = useState(false)
  const [plate, setPlate] = useState('')
  const [observation, setObservation] = useState('')
  const [modalDateVisible, setModalDateVisible] = useState(false)
  const [modePicker, setModePicker] = useState('date')
  const [focusId, setFocusId] = useState('false')

  const refInputDate = useRef(null)
  const refInputTime = useRef(null)
  useEffect(() => {
    setCheckInDateText(
      checkInDate.toDateAR()
    )
    setCheckInTimeText(
      checkInDate.toTimeAR()
    )
  }, [modalDateVisible])

  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || checkInDate
    if (currentDate >= minCheckInDate) {
      setCheckInDate(currentDate)
    }
    setModalDateVisible(false)
  }
  const onFocusCheckIn = (mode, ref) => {
    ref.current.blur()
    setFocusId('')
    setModePicker(mode)
    setModalDateVisible(true)
  }
  const dispatch = useDispatch()
  const handlerBack = () => NavigationService.back()
  const handlerSave = () => dispatch(UserActions.addVisit({ idApp, isOwner, name, document, checkInDateText, checkInTimeText, autorization, plate, observation }))

  return (
    <View>
      {modalDateVisible && (
        <DateTimePicker
          testID="dateTimePicker"
          value={checkInDate}
          mode={modePicker}
          is24Hour={true}
          display="default"
          onChange={onChangeDate}
        />
      )}
      {(!isKeyboardVisible || ![observationLabel, plateLabel].includes(focusId)) &&
        <Header icon={Images.visitHeader} text="Visitas" />
      }
      <View style={{ padding: 20, paddingTop: 10, height: vh((!isKeyboardVisible || ![observationLabel, plateLabel].includes(focusId)) ? 65 : 35) }}>
        {(!isKeyboardVisible || ![observationLabel, plateLabel].includes(focusId)) &&
          <>
            <View style={{ ...styles.rowContainer }}>
              <InputField onFocus={setFocusId.bind(null, '')} label={nameLabel} required value={name} onChangeText={setName} />
            </View>
            <View style={styles.rowContainer}>
              <InputField onFocus={setFocusId.bind(null, '')} label={documentLabel} required value={document} onChangeText={setDocumentName} />
            </View>
            <View style={styles.rowContainer}>
              <InputField
                ref={refInputDate}
                onFocus={onFocusCheckIn.bind(null, 'date', refInputDate)}
                label={checkInDateLabel}
                value={checkInDateText}
                focusable={false}
                required
              />
              <View style={{ width: 50 }} />
              <InputField
                ref={refInputTime}
                onFocus={onFocusCheckIn.bind(null, 'time', refInputTime)}
                label={checkInTimeLabel}
                value={checkInTimeText}
                required
              />
            </View>
          </>
        }
        <View style={styles.rowContainer}>
          <Button
            textStyle={{ margin: 7 }}
            style={{ backgroundColor: autorization ? Colors.error : Colors.success }}
            label={requiredLabel}
            value={autorization}
            onPress={() => {
              setAutorization(!autorization)
              setFocusId('')
            }}
          >
            {autorization ? 'SI' : 'NO'}
          </Button>
          <View style={{ width: 50 }} />
          <InputField onFocus={setFocusId.bind(null, plateLabel)} label={plateLabel} value={plate} onChangeText={setPlate} required />
        </View>
        <View style={{ ...styles.rowContainer, marginTop: 0 }}>
          <Label>{observationLabel}</Label>
        </View>
        <View style={{ ...styles.rowContainer, marginTop: 0 }}>
          <MultilineField onFocus={setFocusId.bind(null, observationLabel)} maxLength={200} value={observation} onChangeText={setObservation} />
        </View>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
        <Button onPress={handlerSave}>GUARDAR</Button>
        <View style={{ width: 50 }} />
        <Button style={{ backgroundColor: Colors.error }} onPress={handlerBack}>CANCELAR</Button>
      </View>
    </View>
  )
}
export default VisitScreen
