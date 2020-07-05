import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import ExampleScreen from 'App/Containers/Example/ExampleScreen'
import OptionsScreen from 'App/Containers/OptionsScreen/OptionsScreen'
import ProfileScreen from 'App/Containers/ProfileScreen/ProfileScreen'
import VisitScreen from 'App/Containers/VisitScreen/VisitScreen'
import VisitListScreen from 'App/Containers/VisitListScreen/VisitListScreen'
import RegisterScreen from 'App/Containers/RegisterScreen/RegisterScreen'
import SearchScreen from 'App/Containers/SearchScreen/SearchScreen'
import SplashScreen from 'App/Containers/SplashScreen/SplashScreen'
import StartupScreen from 'App/Containers/StartupScreen/StartupScreen'
import LoginScreen from 'App/Containers/Login/LoginScreen'
import Title from 'App/Components/Title/Title'
import { visitTitle, searchTitle, profileTitle, registerTitle } from 'App/Assets/Strings'

/**
 * The root screen contains the application's navigation.
 *
 * @see https://reactnavigation.org/docs/en/hello-react-navigation.html#creating-a-stack-navigator
 */
const defaultNavigationOptions = {
  headerForceInset: {
    top: 'never',
    bottom: 'never',
  },
  headerStyle: {
    height: 30,
  },
  headerTitleStyle: {
    fontSize: 18,
  },
}

const StackNavigator = createStackNavigator(
  {
    MainScreen: {
      screen: SearchScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        header: null,
      },
    },
    OptionsScreen: {
      screen: OptionsScreen,
      navigationOptions: {
        header: null,
      },
    },
    ProfileScreen: {
      screen: ProfileScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        headerTitle: profileTitle,
      },
    },
    VisitScreen: {
      screen: VisitScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        headerTitle: visitTitle,
      },
    },
    VisitListScreen: {
      screen: VisitListScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        headerTitle: visitTitle,
      },
    },
    SearchScreen: {
      screen: SearchScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        headerTitle: searchTitle,
      },
    },
    StartupScreen: {
      screen: StartupScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        header: null,
      },
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        header: null,
      },
    },
    RegisterScreen: {
      screen: RegisterScreen,
      navigationOptions: {
        ...defaultNavigationOptions,
        header: null,
      },
    },
    // Create the application routes here (the key is the route name, the value is the target screen)
    // See https://reactnavigation.org/docs/en/stack-navigator.html#routeconfigs
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    // By default the application will show the splash screen
    initialRouteName: 'MainScreen',
    // See https://reactnavigation.org/docs/en/stack-navigator.html#stacknavigatorconfig
  }
)

export default createAppContainer(StackNavigator)
