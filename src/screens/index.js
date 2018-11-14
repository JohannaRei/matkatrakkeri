// @flow

import { Navigation } from 'react-native-navigation';

import Constants from '../global/Constants';

import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import LoginScreen from './LoginScreen';

export function registerScreens(store: {}, Provider: {}) {
  Navigation.registerComponent(Constants.Screens.HOMESCREEN.screen, () => HomeScreen, store, Provider);
  Navigation.registerComponent(Constants.Screens.PROFILESCREEN.screen, () => ProfileScreen, store, Provider);
  Navigation.registerComponent(Constants.Screens.LOGINSCREEN.screen, () => LoginScreen, store, Provider);
}
