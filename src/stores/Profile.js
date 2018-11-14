// @flow

import { observable, action } from 'mobx';

class Store {
  @observable fullName = 'Johanna Reinikainen';
  @observable distanceTracked = 0;

  @action setFullName(name: String) {
    this.fullName = name;
  }

  @action addToDistance(distance: number) {
    this.distanceTracked += distance;
  }
}

export default new Store();