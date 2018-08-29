import React, {Component} from 'react';
import { StyleSheet, ImageBackground, Image, View, PanResponder, Animated } from 'react-native';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={require('./src/BackgroundFruit.jpg')}
          style={styles.BackgroundImage}>
          <Image source= {require('./src/basket.png')} style={{top: 600, left: 200}}/>
        </ImageBackground>
      </View>
      
    );
  }
}
  class Draggable extends Component {
    constructor() {
      super();
      this.state = {
        pan: new Animated.ValueXY()
      };
    }
  
    componentWillMount() {
      // Add a listener for the delta value change
      this._val = { x:0, y:0 }
      this.state.pan.addListener((value) => this._val = value);
      // Initialize PanResponder with move handling
      this.panResponder = PanResponder.create({
        onStartShouldSetPanResponder: (e, gesture) => true,
        onPanResponderMove: Animated.event([
          null, { dx: this.state.pan.x, dy: this.state.pan.y }
        ])
        // adjusting delta value
        value.state.pan.setValue({ x:0, y:0})
      });
    }
  
    render() {
      const panStyle = {
        transform: this.state.pan.getTranslateTransform()
      }
      return (
          <Animated.View
            {...this.panResponder.panHandlers}
            style={[panStyle, styles.circle]}
          />
      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  BackgroundImage: {
    flex: 1,
    width: '125%',
    height: '300%',
    

  },



});
