import React from 'react'
import {View, Image } from 'react-native'
import { Images } from 'App/Theme'

export default (props) => {
    return (
        <View style={{borderColor:'gray', borderBottomWidth:10}}>
            <Image source={Images.logo} style={{margin:2, height:100, width:250,resizeMode: 'contain'}}/>
        </View>
    )
}