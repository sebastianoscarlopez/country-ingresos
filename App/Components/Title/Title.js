import React from 'react'
import { useDispatch } from 'react-redux'
import { Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { NavigationActions } from 'react-navigation';
import styles from './TitleStyle.js'

export default (props) => {
    const { children } = props
    const dispatch = useDispatch()
    const backAction = () => dispatch(NavigationActions.back())
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity 
                onPress={backAction}
            ><Text style={styles.button}>←</Text></TouchableOpacity>
            <SafeAreaView style={{flexDirection:'column', justifyContent: 'space-around'}}>
                <Text style={styles.title}>{ children }</Text>
            </SafeAreaView>
        </SafeAreaView>
    )
}
