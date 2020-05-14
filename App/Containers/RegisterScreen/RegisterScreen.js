import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { TextInput, Text, View } from 'react-native'
import ContainerScreen from 'App/Containers/ContainerScreen/ContainerScreen'
import { InputField, Button } from 'App/Components'
import { registerTitle, registerLegend, documentLabel, eMailLabel, allotmentLabel, acceptButton } from 'App/Assets/Strings'
import styles from '../ContainersStyle'

const RegisterScreen = (props) => {
    const dispatch = useDispatch()
    const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
    const [document, setDocument] = useState('')
    const [eMail, setEMail] = useState('')
    const [allotment, setAllotment] = useState('')
    return (
        <ContainerScreen title={registerTitle}>
            <Text style={{borderWidth:1, padding: 5, marginBottom: 50, textAlign: 'center'}}>{registerLegend}</Text>
            <View style={{...styles.columnContainer, paddingLeft:50, paddingRight:50, alignItems:'center'}}>
                <View style={styles.rowContainer}>
                    <InputField label={documentLabel} value={document} onChangeText={setDocument} rounded />
                </View>
                <View style={styles.rowContainer}>
                    <InputField label={eMailLabel} value={eMail} onChangeText={setEMail} rounded />
                </View>
                <View style={styles.rowContainer}>
                    <InputField label={allotmentLabel } value={allotment} onChangeText={setAllotment} rounded />
                </View>
                <View style={styles.rowContainer}>
                    <View style={{width:'100%', alignItems:'center', paddingTop:20}}>
                        <Button onPress={() => navigate('OptionsScreen')}>{acceptButton}</Button>
                    </View>
                </View>
            </View>
        </ContainerScreen> 
    )
}
export default RegisterScreen