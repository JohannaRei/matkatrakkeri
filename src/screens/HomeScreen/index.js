// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';
import Permissions from 'react-native-permissions';

import NavButtons  from '../../global/NavButtons';
import NavBar      from '../../global/NavBar';
import Constants   from '../../global/Constants';

@inject('App', 'Account', 'Location', 'Profile') @observer
export default class HomeScreen extends Component {
  static navigatorStyle   = NavBar.Default;

  constructor(props: {}) {
    super(props);

    const { App, navigator } = this.props;
    App.rootNavigator = navigator;

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  componentDidMount() {
    this._checkLocationPermission();
  }

  _checkLocationPermission = async () => {
    const { Location } = this.props;
    await Permissions.check('location')
      .then((response) => {
        if (response !== 'authorized') {
          console.log('permission was granted')
          this._requestLocationPermission();
        } else {
          Location.setLocationPermission(response);
        }
      });
    this.getLocation();
  }

  _requestLocationPermission = () => {
    const { Location } = this.props;
    Permissions.request('location')
      .then((response) => {
        Location.setLocationPermission(response);
      });
  }

  getLocation = () => {
    const { Location } = this.props;
    if (Location.locationPermission === 'authorized') {
      navigator.geolocation.getCurrentPosition(this.setLocation);
    }
  }

  setLocation = (location) => {
    const { Location } = this.props;
    const { latitude, longitude } = location.coords;
    Location.setLocation(latitude, longitude);
  }

  render() {
    const { Account, Location, Profile } = this.props;
    console.log(Location.locationPermission)

    return (
      <View style={styles.container}>
        <Text>Current latitude: {Location.latitude}</Text>
        <Text>Current longitude: {Location.longitude}</Text>
        <Text>Location permission granted: {Location.locationPermission}</Text>
        <Button
          title="add 10"
          onPress={() => Profile.addToDistance(10)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
