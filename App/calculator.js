
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';
export default class Calculator extends Component {

  segmentValues() { return ['10%', '20%', '30%']; }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.header}>
            Tip Calculator
          </Text>
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.label}>
            Amount
          </Text>
          <TextInput style={styles.textInputAmount} placeholder="enter an amount" value="10"/>
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.label}>
            Tip
          </Text>
          <Text>
            1.0
          </Text>
        </View>
        <View style={{backgroundColor: 'black', height: 10}}>
        </View>
        <View style={{marginTop: 16}}>
          <SegmentedControlTab values={this.segmentValues()} />
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.label}>
            Total
          </Text>
          <Text>
            11.0
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 50,
    marginRight: 50,
    // backgroundColor: 'yellow',
  },
  header: {
    fontSize: 36,
    marginTop: 48,
    textAlign: 'center',
  },
  label: {
    fontSize: 24
  },
  billContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    alignItems: 'center',

  },
  textInputAmount: {
    width: 100,
    paddingRight: 5,
    textAlign: 'right',
    borderWidth: 1
  },
});

module.exports = Calculator;
