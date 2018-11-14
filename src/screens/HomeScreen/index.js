// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import NavButtons  from '../../global/NavButtons';
import NavBar      from '../../global/NavBar';
import Constants   from '../../global/Constants';

@inject('App', 'Account', 'Location', 'Profile') @observer
export default class HomeScreen extends Component {
  static navigatorButtons = NavButtons.WithSideMenu;
  static navigatorStyle   = NavBar.Default;

  constructor(props: {}) {
    super(props);

    const { App, navigator } = this.props;
    App.rootNavigator = navigator;

    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
  }

  onNavigatorEvent = (event: {}) => {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
  }

  render() {
    const { Account, Location, Profile } = this.props;

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
