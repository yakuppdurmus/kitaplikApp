import React, { Component } from 'react'
import { Text, View, Dimensions, Animated, Easing,TouchableOpacity } from 'react-native'
import SvgUri from 'react-native-svg-uri';
import { Fab,Icon } from 'native-base';
import { MyHeader } from '../components';

const screenWidth = Dimensions.get('window').width
const boxWidth = screenWidth + 200;
export class Library extends Component {

    componentDidMount() {
        this.startAnimation();
    }

    state = {
        animation: new Animated.Value(0),
    };

    startAnimation = () => {
        Animated.loop(Animated.timing(this.state.animation, {
            duration: 80000,
            toValue: 1,
            easing: Easing.linear,
            useNativeDriver:true,
        })).start();
    }

    render() {
        const interpol = this.state.animation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg'],
        });

        const animatedStyle = {
            transform: [{
                rotate: interpol,
            }]
        }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MyHeader
                navigation={this.props.navigation}
                text={"Kütüphane"}
                />
                <View style={{flex:1,paddingTop:20}}>
                    <Animated.View style={[animatedStyle]}>
                        <SvgUri
                            width={boxWidth}
                            height={boxWidth}
                            source={require('../assets/images/word.svg')} />
                    </Animated.View>
                    <View style={{ position: 'absolute', transform: [{ rotate: '-5deg' }], zIndex: 1, top: boxWidth / 2 - 50, left: boxWidth / 2 - 100, width: 200, height: 100 }}>
                        <Text style={{ fontSize: 18 }}>Kitap</Text>
                        <View style={{ width: '100%', alignItems: 'center', borderBottomWidth: 3, borderTopWidth: 3, marginTop: 5, marginBottom: 5 }}>
                            <Text style={{ fontSize: 38 }}>Kitaplık App</Text>
                        </View>
                        <Text style={{ fontSize: 18, width: '100%', textAlign: 'right' }}>Dünyası</Text>
                    </View>
                </View>
                <TouchableOpacity
                style={{width:50,height:50,position:'absolute',zIndex:20,right:40,bottom:40,borderRadius:25,backgroundColor:'#e74c3c',paddingTop:5,justifyContent:'center',alignItems:'center'}}>
                    <Icon style={{color:'white'}} name="ios-arrow-down" />
                </TouchableOpacity>

            </View>
        )
    }
}

export default Library
