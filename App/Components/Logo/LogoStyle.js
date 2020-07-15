import { StyleSheet } from 'react-native'
import { vw, vh } from 'App/Helpers/DimensionsHelper'
export default StyleSheet.create({
  logo: {
    left: (vw(100) - vh(40)) / 2,
    width: vh(40),
    height: vh(40),
  }
})