import navigationService from 'App/Services/NavigationService'

export function* navigate(action) {
  navigationService.navigate(action.screenID)
}
