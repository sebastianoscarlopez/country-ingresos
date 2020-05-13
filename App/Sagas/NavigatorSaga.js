import navigationService from 'App/Services/NavigationService'

/**
 * Navigate using navigator
 */
export function* navigate(action) {
  navigationService.navigate(action.screenID)
}
