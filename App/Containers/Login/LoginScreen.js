import React, {useState } from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { TextInput, Text, View, Button } from 'react-native'

const LoginScreen = (props) => {
    const dispatch = useDispatch()
    const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
    const [user, setUser] = useState('')
    const onSignUp = () => {
        navigate('OptionsScreen')
    }
    return (<View>
        <TextInput placeholder="Usuario" value={user} onChangeText={setUser} />
        <Text>User:{user}</Text>
        <Button title="Entrar" onPress={onSignUp}></Button>
    </View>)
}
export default LoginScreen