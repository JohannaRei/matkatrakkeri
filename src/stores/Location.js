// @flow

import { observable, action } from 'mobx';

class Store {
  @observable locationPermission = 'unauthorized';
  @observable latitude = 20;
  @observable longitude = 30;

  @action setLocationPermission(permission: String) {
    this.locationPermission = permission;
  }

  @action setLocation(latitude: number, longitude: number) {
    return new Promise((resolve, reject) => {
      if (this.locationPermission === 'authorized') {
        this.latitude = latitude;
        this.longitude = longitude;
        resolve({ message: 'success!'});
      } else {
        reject({ message: 'Location permission not set' });
      }
    });
  }
}

export default new Store();