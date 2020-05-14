import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import OptionsScreen from 'App/Containers/Options/OptionsScreen'
import ProfileScreen from 'App/Containers/ProfileScreen/ProfileScreen'
import VisitScreen from 'App/Containers/VisitScreen/VisitScreen'
import RegisterScreen from 'App/Containers/RegisterScreen/RegisterScreen'
import SearchScreen from 'App/Containers/SearchScreen/SearchScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const StackNavigator = createStackNavigator(
  {
    // The main application screen is our "ExampleScreen". Feel free to replace it with your
    // own screen and remove the example.
    MainScreen: RegisterScreen,
    LoginScreen: LoginScreen,
    OptionsScreen: OptionsScreen,
    ProfileScreen: ProfileScreen,
    VisitScreen: VisitScreen,
    RegisterScreen: RegisterScreen,
    SearchScreen: SearchScreen,
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: SplashScreen,
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
    headerMode: 'none',
  }
)

export default createAppContainer(StackNavigator)
