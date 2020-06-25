import React from 'react'
import { useDispatch } from 'react-redux'
import NavigatorActions from 'App/Stores/Navigator/Actions'
import { Text, SafeAreaView, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { OptionButton } from 'App/Components'
import { Helpers, Metrics, Images, Fonts, Colors } from 'App/Theme'
import styles from './OptionsScreenStyle'

import LinearGradient from 'react-native-linear-gradient'

const OptionsScreen = (props) => {
  const dispatch = useDispatch()
  const navigate = (screenID) => dispatch(NavigatorActions.navigate(screenID))

  return (
    <LinearGradient colors={[Colors.backgroundTop, Colors.backgroundBottom]} style={styles.container}>
      <SafeAreaView style={styles.container}>
        <SafeAreaView style={Helpers.fillRowCenter}>
          <OptionButton icon={Images.visit} title='Visitas' description='Podra crear, modificar y borrar datos.' onPress={() => navigate('SearchScreen')} />
        </SafeAreaView>
        <SafeAreaView style={Helpers.fillRowCenter}>
          <OptionButton icon={Images.search} title='Lotes - Listas' description='Busqueda de lotes y listas' onPress={() => navigate('RegisterScreen')} />
        </SafeAreaView>
        <SafeAreaView style={Helpers.fillRowCenter}>
          <OptionButton icon={Images.search} title='Datos Personales' description='Podra dar de alta, modificar y borrar datos' onPress={() => navigate('ProfileScreen')} />
        </SafeAreaView>
        <SafeAreaView style={{ ...Helpers.fillRowCenter, backgroundColor: 'transparent' }}>
          <OptionButton icon={Images.password} title='Cambiar Clave' description='' onPress={() => navigate('VisitScreen')} />
        </SafeAreaView>
      </SafeAreaView>
    </LinearGradient>
  )
}

export default OptionsScreen
