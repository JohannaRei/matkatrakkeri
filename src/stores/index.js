// @flow

import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

import App     from './App';
import Account from './Account';
import Location from './Location';
import Profile from './Profile';

const hydrate = create({ storage: AsyncStorage });

const stores = {
  App,
  Account,
  Location,
  Profile
}

// you can hydrate stores here with mobx-persist
hydrate('Account', stores.Account);
hydrate('Profile', stores.Profile);

export default {
  ...stores
};
