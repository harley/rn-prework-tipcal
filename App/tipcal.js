import React, { Component } from 'react';

import { StackNavigator, } from 'react-navigation';
import Calculator from './calculator.js';
import Settings from './settings.js';

const tipcal = StackNavigator({
  Main: {screen: Calculator},
  Settings: {screen: Settings}
});

module.exports = tipcal
