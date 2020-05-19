import React from 'react'
import { Image, SafeAreaView } from 'react-native'
import { Images } from 'App/Theme'

export default (props) => {
    return (
        <SafeAreaView style={{borderColor:'gray', borderBottomWidth:10}}>
            <Image source={Images.logo} style={{margin:2, height:100, width:250,resizeMode: 'contain'}}/>
        </SafeAreaView>
    )
}