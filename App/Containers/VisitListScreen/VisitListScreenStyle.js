import { StyleSheet } from 'react-native'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import { vw, vh } from 'App/Helpers/DimensionsHelper'
const cellHeader = {
  padding: 5,
  borderColor: Colors.inputsBorder,
  borderWidth: 1,
  alignItems: 'center',
}
export default StyleSheet.create({
  row: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: Colors.white
  },
  column_1: {
    width: '40%',
    ...cellHeader,
    alignItems: 'flex-start'
  },
  column_2: {
    width: '30%',
    ...cellHeader,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  column_3: {
    width: '30%',
    ...cellHeader
  },
  headerText:{
    ...Fonts.normal,
    fontWeight: '600',
  },
  cellText:{
    ...Fonts.normal,
    paddingLeft: 5,
    paddingRight: 5,
  }
})
