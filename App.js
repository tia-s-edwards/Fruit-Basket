import React, {Component} from 'react';
import { StyleSheet, ImageBackground, Image, View, Text, PanResponder, Animated, Dimensions } from 'react-native';
import Falling from './Fall';

const { width } = Dimensions.get("window")

export default class App extends React.Component {
  
  

  //constructor to move basket
  constructor(props) {
    super(props);
  
    this.state = {
      pan: new Animated.ValueXY()
     
    };
  }
  
  
  componentWillMount() {
    this._panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
  
      // Initially, set the value of x and y to 0 (the center of the screen)
      onPanResponderGrant: (e, gestureState) => {
        // Set the initial value to the current state
        this.state.pan.setOffset({x: this.state.pan.x._value, y: this.state.pan.y._value});
        this.state.pan.setValue({x: 0, y: 0});
    
      },
  
      // When we drag/pan the object, set the delate to the states pan position
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y},
      ]),
  
      onPanResponderRelease: (e, {vx, vy}) => {
        this.state.pan.flattenOffset();
      }
    });
  }
  
  
  
  render() {
    // Destructure the value of pan from the state
    let { pan } = this.state;

    // Calculate the x and y transform from the pan value
    let [translateX, translateY] = [pan.x, pan.y];

    // Calculate the transform property and set it as a value for our style which we add below to the Animated.View component
    let imageStyle = {transform: [{translateX}, {translateY}]};
    let fall = {transform:[ {translateY}]};

    return (
      <View style={styles.container}>
        <ImageBackground source={require('./src/BackgroundFruit.jpg')}
          style={styles.BackgroundImage}>
          <Falling></Falling>
          <Animated.View style={imageStyle}{...this._panResponder.panHandlers}>

            <Image source= {require('./src/basket.png')} style={{top: 600, left: 200}}/>
          </Animated.View>
        </ImageBackground>
      </View>
      
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
  textStyle: {
    flex:1,
    top: 50,
    left: 200,
    alignItems:'center',
    justifyContent: 'center',
  }



});
