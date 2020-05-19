import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { TextInput, Text, SafeAreaView } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField, Button } from 'App/Components'
import { registerLegend, documentLabel, eMailLabel, allotmentLabel, acceptButton } from 'App/Assets/Strings'
import styles from '../ContainersStyle'

const RegisterScreen = (props) => {
    const dispatch = useDispatch()
    const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
    const [document, setDocument] = useState('')
    const [eMail, setEMail] = useState('')
    const [allotment, setAllotment] = useState('')
    return (
        <ContainerScreen>
            <Text style={{borderWidth:1, padding: 5, marginBottom: 50, textAlign: 'center'}}>{registerLegend}</Text>
            <SafeAreaView style={{...styles.columnContainer, paddingLeft:50, paddingRight:50, alignItems:'center'}}>
                <SafeAreaView style={styles.rowContainer}>
                    <InputField label={documentLabel} value={document} onChangeText={setDocument} rounded />
                </SafeAreaView>
                <SafeAreaView style={styles.rowContainer}>
                    <InputField label={eMailLabel} value={eMail} onChangeText={setEMail} rounded />
                </SafeAreaView>
                <SafeAreaView style={styles.rowContainer}>
                    <InputField label={allotmentLabel } value={allotment} onChangeText={setAllotment} rounded />
                </SafeAreaView>
                <SafeAreaView style={styles.rowContainer}>
                    <SafeAreaView style={{width:'100%', alignItems:'center', paddingTop:20}}>
                        <Button onPress={() => navigate('OptionsScreen')}>{acceptButton}</Button>
                    </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </ContainerScreen> 
    )
}
export default RegisterScreen