// @flow

import Images from './Images';

export default {
  LOGINSCREEN: {
    screen : 'app.LoginScreen',
    title  : 'Login',
  },
  DRAWER: {
    screen : 'app.DrawerScreen',
  },
  HOMESCREEN: {
    screen       : 'app.HomeScreen',
    title        : 'Home',
    label        : 'Home',
    icon         : Images.HOME,
    selectedIcon : Images.HOME_selected,
  },
  PROFILESCREEN: {
    screen       : 'app.ProfileScreen',
    title        : 'Profile',
    label        : 'Profile',
    icon         : Images.PROFILE,
    selectedIcon : Images.PROFILE_selected,
  },
}
