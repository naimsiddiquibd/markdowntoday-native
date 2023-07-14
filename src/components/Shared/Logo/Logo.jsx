import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class Logo extends Component {
  render() {
    return (
      <View>
        <Image
          source={require('../../../../assets/logo.png')}
          style={{ width: 170, height: 30 }}
        />
      </View>
    );
  }
}
