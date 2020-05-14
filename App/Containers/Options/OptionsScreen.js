import React from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { OptionButton } from 'App/Components'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import styles from './OptionsScreenStyle'


const OptionsScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
  
  return (
    <View style={styles.container}>
      <View style={Helpers.fillRowCenter}>
        <View style={Helpers.fillColCenter}>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="🏠" onPress={() => navigate('SearchScreen')}></OptionButton>
          </View>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="¿?" onPress={() => navigate('RegisterScreen')}></OptionButton>
          </View>
        </View>
        <View style={Helpers.fillColCenter}>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="📝" onPress={() => navigate('ProfileScreen')}></OptionButton>
          </View>
          <View style={Helpers.fillColCenter}>
            <OptionButton icon="👥" onPress={() => navigate('VisitScreen')}></OptionButton>
          </View>
        </View>
      </View>
      <View style={{...Helpers.fillRowCenter, flex:0.5}}>
      </View>
    </View>
  )
}

export default OptionsScreen