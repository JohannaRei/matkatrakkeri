// @flow

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer } from 'mobx-react/native';

import NavButtons from '../../global/NavButtons';
import NavBar from '../../global/NavBar';
import Constants from '../../global/Constants';

@inject('Account', 'Profile') @observer
export default class ProfileScreen extends Component {
  static navigatorStyle   = NavBar.Default;

  constructor(props: {}) {
    super(props);
  }

  render() {
    const { Account, Profile } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Profile
        </Text>
        <Text>Name: {Profile.fullName}</Text>
        <Text>Distance tracked: {Profile.distanceTracked}</Text>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
