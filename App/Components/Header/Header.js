import React from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import { Images, Colors } from 'App/Theme'
import { vw, vh } from 'App/Helpers/DimensionsHelper'
import LinearGradient from 'react-native-linear-gradient'
import styles from './HeaderStyle.js'

export default ({ children, text, icon, onPressIcon }) => {
  return (
    <View>
      {!text && (
        <Image
          source={Images.header}
          resizeMode="contain"
          style={{ width: vw(100), height: vw(42) }}
        />
      )}
      {!!text && (
        <View style={{ height: vh(15) }}>
          <LinearGradient
            colors={[Colors.headerTop, Colors.headerBottom]}
            style={{ flex: 1, flexDirection:'row', backgroundColor: Colors.transparent, borderBottomStartRadius: 40, borderBottomEndRadius: 40 }}
          >
            <TouchableOpacity onPress={onPressIcon} style={styles.iconContainer}>
                <Image source={icon} resizeMode="contain" style={styles.icon}/>
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={styles.text}>{text}</Text>
            </View>
          </LinearGradient>
        </View>
      )}
    </View>
  )
}
