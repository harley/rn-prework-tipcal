import React, { Component } from 'react';
import {
  View,
  Text,
  Picker,
  AsyncStorage,
} from 'react-native';

export class Settings extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  constructor(props) {
    super(props);
    this.state = {
      sceneTransition: 'FloatFromRight',
    }
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.getSceneTransition();
  }

  async setSelectSceneTransition(scene) {
    try {
      await AsyncStorage.setItem('SCENE_SELECTED', scene);

      this.setState({
        sceneTransition: scene,
      })
    } catch(error) {
      console.log("async error: ", error);
    }
  }

  async getSceneTransition() {
    try {
      let scene = await AsyncStorage.getItem("SCENE_SELECTED");
      this.setState({
        sceneTransition: scene,
      });
    } catch(error) {
      console.log("async getSceneTransition error: ", error);
    }
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <View style={{marginTop:50,padding:10}}>
        <View>
          <Text style={{fontSize:25}}>Scene Transitions</Text>
          <Picker
            selectedValue={this.state.sceneTransition}
            onValueChange={(scene) => this.setSelectSceneTransition(scene)}>
            <Picker.Item label="FloatFromRight" value="FloatFromRight" />
            <Picker.Item label="FloatFromLeft" value="FloatFromLeft" />
            <Picker.Item label="FloatFromBottom" value="FloatFromBottom" />
            <Picker.Item label="FloatFromBottomAndroid" value="FloatFromBottomAndroid" />
            <Picker.Item label="SwipeFromLeft" value="SwipeFromLeft" />
            <Picker.Item label="HorizontalSwipeJump" value="HorizontalSwipeJump" />
            <Picker.Item label="HorizontalSwipeJumpFromRight" value="HorizontalSwipeJumpFromRight" />
          </Picker>
        </View>
      </View>
    )

  }
};

module.exports = Settings;
