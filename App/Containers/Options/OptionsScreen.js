import React from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Text, SafeAreaView } from 'react-native'
import { connect } from 'react-redux'
import { OptionButton } from 'App/Components'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import styles from './OptionsScreenStyle'


const OptionsScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))
  
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={Helpers.fillRowCenter}>
        <SafeAreaView style={Helpers.fillColCenter}>
          <SafeAreaView style={Helpers.fillColCenter}>
            <OptionButton icon="🏠" onPress={() => navigate('SearchScreen')}></OptionButton>
          </SafeAreaView>
          <SafeAreaView style={Helpers.fillColCenter}>
            <OptionButton icon="¿?" onPress={() => navigate('RegisterScreen')}></OptionButton>
          </SafeAreaView>
        </SafeAreaView>
        <SafeAreaView style={Helpers.fillColCenter}>
          <SafeAreaView style={Helpers.fillColCenter}>
            <OptionButton icon="📝" onPress={() => navigate('ProfileScreen')}></OptionButton>
          </SafeAreaView>
          <SafeAreaView style={Helpers.fillColCenter}>
            <OptionButton icon="👥" onPress={() => navigate('VisitScreen')}></OptionButton>
          </SafeAreaView>
        </SafeAreaView>
      </SafeAreaView>
      <SafeAreaView style={{...Helpers.fillRowCenter, flex:0.5}}>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default OptionsScreen