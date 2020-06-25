import React from 'react'
import { Image, View, SafeAreaView } from 'react-native'
import { Images } from 'App/Theme'
import { vw, vh } from 'App/Helpers/DimensionsHelper'

export default (props) => {
    return (
        <Image source={Images.header} resizeMode="contain" style={{ width: vw(100), height: vw(42) }}/>
    )
}