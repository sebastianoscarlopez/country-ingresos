import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { TextInput, Text, Image, SafeAreaView, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputFieldBig, Button } from 'App/Components'
import {
  registerLegend_1,
  registerLegend_2,
  registerLegend_3,
  documentLabel,
  eMailLabel,
  allotmentLabel,
  acceptButton,
} from 'App/Assets/Strings'
import styles from './RegisterScreenStyle'
import { Images, Colors } from 'App/Theme'

const RegisterScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
  const [document, setDocument] = useState('')
  const [eMail, setEMail] = useState('')
  const [allotment, setAllotment] = useState('')
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingTop: 40 }}>
        <Image source={Images.logo} resizeMode="contain" style={styles.logo} />
      </View>
      <View style={{ flex: 0.3 }}>
        <Text style={styles.legend}>{registerLegend_1}</Text>
        <Text style={{ ...styles.legend, color: Colors.disabled }}>{registerLegend_2}</Text>
        <Text style={styles.legend}>{registerLegend_3}</Text>
      </View>
      <View
        style={{
          flex: 0.5,
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <View style={styles.inputContainer}>
            <InputFieldBig label={documentLabel} style={styles.input} value={document} onChangeText={setEMail} rounded />
        </View>
        <View style={styles.inputContainer}>
          <InputFieldBig label={eMailLabel} value={eMail} onChangeText={setEMail} rounded />
        </View>
        <View style={styles.inputContainer}>
          <InputFieldBig label={allotmentLabel} value={allotment} onChangeText={setEMail} rounded />
        </View>
      </View>
      <View style={styles.sendContainer} >
        <Image source={Images.send} resizeMode="contain" style={styles.send} />
      </View>
    </SafeAreaView>
  )
}

/*

        
        <Text style={{ borderWidth: 1, padding: 5, marginBottom: 50, textAlign: 'center' }}>
        {registerLegend}
      </Text>
      <SafeAreaView
        style={{
          ...styles.columnContainer,
          paddingLeft: 50,
          paddingRight: 50,
          alignItems: 'center',
        }}
      >
        <SafeAreaView style={styles.rowContainer}>
          <InputField label={documentLabel} value={document} onChangeText={setDocument} rounded />
        </SafeAreaView>
        <SafeAreaView style={styles.rowContainer}>
          <InputField label={eMailLabel} value={eMail} onChangeText={setEMail} rounded />
        </SafeAreaView>
        <SafeAreaView style={styles.rowContainer}>
          <InputField
            label={allotmentLabel}
            value={allotment}
            onChangeText={setAllotment}
            rounded
          />
        </SafeAreaView>
        <SafeAreaView style={styles.rowContainer}>
          <SafeAreaView style={{ width: '100%', alignItems: 'center', paddingTop: 20 }}>
            <Button onPress={() => navigate('OptionsScreen')}>{acceptButton}</Button>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
*/
export default RegisterScreen
