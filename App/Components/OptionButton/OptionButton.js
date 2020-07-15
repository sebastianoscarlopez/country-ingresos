import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import styles from './OptionButtonStyle.js'
import {  Helpers } from 'App/Theme'
import { vw, vh } from 'App/Helpers/DimensionsHelper'

export default (props) => {
    const { onPress, icon, title, description } = props
    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}>
            <View style={styles.iconContainer}>
                <Image source={icon} resizeMode="center" style={styles.icon}/>
            </View>
            <View style={styles.text}>
                <View style={Helpers.fillRow}>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <Text style={{...styles.description, flex: description.length > 0 ? 1 : 0.6}}>{description}</Text>
            </View>
        </TouchableOpacity>
    )
}