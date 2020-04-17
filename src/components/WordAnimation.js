import React, { Component } from 'react'
import { Text, View, Dimensions, Animated, Easing,TouchableOpacity } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import { Icon } from 'native-base';
import {imageUrl} from '../services/config'

const screenWidth = Dimensions.get('window').width
const boxWidth = screenWidth + 200;

//title
//onpress
//topText
//textStyle
//text

export class WordAnimation extends Component {
    constructor(props){
        super(props);
        this.state={
            duration:props.duration ? props.duration : 80000
        }
    }

    componentDidMount() {
        this.startRotateAnimation();
        this.startFadeAnimation();
    }

    stateAnimated = {
        rotateAnimation: new Animated.Value(0),
        fadeAnimation : new Animated.Value(0),
    };

    startRotateAnimation = () => {
        Animated.loop(Animated.timing(this.stateAnimated.rotateAnimation, {
            duration: this.state.duration,
            toValue: 1,
            easing: Easing.linear,
            useNativeDriver:true,
        })).start();
    }

    startFadeAnimation = () => {
        Animated.timing(this.stateAnimated.fadeAnimation, {
            duration: 1500,
            toValue: 1,
            easing: Easing.back(1),
            useNativeDriver:true,
        }).start();
    }

    render() {
        const rotateInterpol = this.stateAnimated.rotateAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });
        const rotateAnimatedStyle = {
            transform: [{
                rotate: rotateInterpol,
            }]
        }

        const fadeInterpol = this.stateAnimated.fadeAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
        });

        const fadeAnimatedStyle = {
            opacity: fadeInterpol
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Animated.View style={[{flex:1,paddingTop:20,opacity:0},fadeAnimatedStyle]}>
                    <Animated.View style={[rotateAnimatedStyle]}>
                        <SvgUri
                            width={boxWidth}
                            height={boxWidth}
                            source={{uri:imageUrl+'word.svg'}} />
                    </Animated.View>
                    <TouchableOpacity onPress={this.props.onPress} style={{ position: 'absolute', transform: [{ rotate: '-10deg' }], zIndex: 1, top: boxWidth / 2 - 50, left: boxWidth / 2 - 100, width: 200, height: 100 }}>
                        <Text style={{ fontSize: 18 }}>{this.props.topText ? this.props.topText : "Kitap Dünyası"}</Text>
                        <View style={{ width: '100%', alignItems: 'center', borderBottomWidth: 3, borderTopWidth: 3, marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 38 }}>{this.props.title ? this.props.title : "Kitaplık App"}</Text>
                        </View>
                        <View style={{}}>
                        <Icon style={{position:'absolute',color:'#777',marginLeft:10}} name="warning"/>
                        <Text style={Object.assign({ fontSize: 18, textAlign: 'center',color:'#333',fontSize:14 },this.props.textStyle)}>{this.props.text ? this.props.text : "Kitaplıkta hiç kitap\nbulamadık!"}</Text>
                        </View>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        )
    }
}

export default WordAnimation
