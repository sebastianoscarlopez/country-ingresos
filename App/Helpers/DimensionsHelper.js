import { Dimensions } from 'react-native'

export const vw = (percentageWidth) => Dimensions.get('window').width * (percentageWidth / 100)
export const vh = (percentageHeight) => Dimensions.get('window').height * (percentageHeight / 100)
