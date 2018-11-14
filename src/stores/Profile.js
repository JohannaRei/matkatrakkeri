// @flow

import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

class Store {
  @persist @observable fullName = 'Johanna Reinikainen';
  @persist @observable distanceTracked = 0;

  @action setFullName(name: String) {
    this.fullName = name;
  }

  @action addToDistance(distance: number) {
    this.distanceTracked += distance;
  }
}

export default new Store();