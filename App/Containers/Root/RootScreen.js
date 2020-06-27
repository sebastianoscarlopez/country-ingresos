import React from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { SafeAreaView } from 'react-native'
import { Helpers } from 'App/Theme'

const RootScreen = (props) => {
/*  
  const showHeader = useSelector((state) => state.showHeader)
  const dispatch = useDispatch()
  const startup = useCallback(() => dispatch(StartupActions.startup()), [dispatch])
  useEffect(() => {
    startup()
  }, [])
*/
  return (
    <SafeAreaView style={Helpers.fill}>
      <AppNavigator
        // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef)
        }}
      />
    </SafeAreaView>
  )
}
export default RootScreen
