import React from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { OptionButton } from 'App/Components'
import ExampleActions from 'App/Stores/Example/Actions'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import styles from './OptionsScreenStyle'


const OptionsScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
  const onStartSearch = () => {
    navigate('SearchScreen')
  }
  
  return (
    <View style={styles.container}>
      <View style={Helpers.fillRowCenter}>
        <View style={Helpers.fillColCenter}>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="🏠" onPress={onStartSearch}></OptionButton>
          </View>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="¿?"></OptionButton>
          </View>
        </View>
        <View style={Helpers.fillColCenter}>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="📝"></OptionButton>
          </View>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="👥"></OptionButton>
          </View>
        </View>
      </View>
      <View style={{...Helpers.fillRowCenter, flex:0.5}}>
      </View>
    </View>
  )
}

export default OptionsScreen