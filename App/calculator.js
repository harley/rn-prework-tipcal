
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      billAmount: 0,
      segmentSelectedIndex: 0,
      percent: 10,
      sceneTransition: 'FloatFromRight',
    }
  }

  static navigationOptions = {
    title: "TipCal",
    header: ({state, navigate}) => {
      let right = (<Button title="Settings" onPress={() => {console.log('settings');navigate('Settings')}}/>);
      return { right };
    }
  }


  segmentValues() { return ['10%', '20%', '30%']; }

  calculateAmount(billAmount, percent) {
    var tipAmount = billAmount * percent / 100.0;
    var result = billAmount + tipAmount;

    console.log("billAmount, percent, tipAmount, result", billAmount, percent, tipAmount, result);

    this.setState({
      result: result,
      tipAmount: tipAmount
    })
  }

  onChangeBillAmount(amount) {
    console.log("change: ", amount, parseFloat(amount));
    billAmount = parseFloat(amount);
    this.setState({
      billAmount: billAmount
    });

    this.calculateAmount(billAmount, this.state.percent);
  }

  onChangeSegment(index) {
    console.log("onChangeSegment");
    var percent = parseFloat(this.segmentValues()[index]);
    this.setState({
      segmentSelectedIndex: index,
      percent: percent
    });

    this.calculateAmount(this.state.billAmount, percent);
  }

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
          <TextInput style={styles.textInputAmount} placeholder="enter an amount"
            onChangeText={(amount) => this.onChangeBillAmount(amount)}
            keyboardType="numeric"
            maxLength={100}
            />
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.label}>
            Tip
          </Text>
          <Text>
            {this.state.percent}%
          </Text>
        </View>
        <View style={{backgroundColor: 'black', height: 10}}>
        </View>
        <View style={{marginTop: 16}}>
          <SegmentedControlTab values={this.segmentValues()}
            onTabPress={index => this.onChangeSegment(index)}
             />
        </View>
        <View style={styles.billContainer}>
          <Text style={styles.label}>
            Total
          </Text>
          <Text>
            {this.state.result}
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
    width: 200,
    paddingRight: 5,
    textAlign: 'right',
    borderWidth: 1
  },
});

module.exports = Calculator;
