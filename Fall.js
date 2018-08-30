import React, {Component} from 'react';
import { StyleSheet, ImageBackground, Image, View, PanResponder, Animated, Dimensions } from 'react-native';


const { width } = Dimensions.get("window")

export default class Falling extends Component {
    constructor(){
        super()
        this.state = {
            yPosition: new Animated.Value(0),
            NumberHolder:1
        }
    }
     
    componentDidMount(){
        Animated.timing(this.state.yPosition, {
            toValue: 900,
            duration: 1800
        }).start();
    }
    
    
    render(){

        let fallStyle = {
            transform: [{translateY: this.state.yPosition}]
        }
        return(
            <Animated.View style ={fallStyle}>
                <Image source ={require('./src/apple.png')} style={{top: 0, left:100}}/>
            </Animated.View>

        )

     }

}