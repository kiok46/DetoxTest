import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app';

export default class DetoxTest extends Component {
  render() {
    return (
      <App />
          );
  }
}

AppRegistry.registerComponent('DetoxTest', () => DetoxTest);
