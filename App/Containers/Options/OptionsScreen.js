import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import { OptionButton } from 'App/Components'
import ExampleActions from 'App/Stores/Example/Actions'
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme'
import styles from './OptionsScreenStyle'

class OptionsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={Helpers.fillRowCenter}>
          <View style={Helpers.fillColCenter}>
            <View style={Helpers.fillColCenter}>
              <OptionButton icon="🏠"></OptionButton>
            </View>
            <View style={Helpers.fillColCenter}>
              <OptionButton icon="?"></OptionButton>
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
}

const mapStateToProps = (state) => ({
    user: state.example.user
  })
  
  const mapDispatchToProps = (dispatch) => ({
    fetchUser: () => dispatch(ExampleActions.fetchUser()),
  })
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(OptionsScreen)