import React, { Component } from 'react'
import { View, Dimensions, TouchableOpacity, Animated, Easing } from 'react-native'
import { Icon, Text } from 'native-base';

let screenHeight = Dimensions.get('window').height;
let boxCloseMargin = 0;
const boxHeight = screenHeight * .85;
let boxOpenMargin = screenHeight * .75;

export class _DoubleScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }



    stateAnimated = {
        animation: new Animated.Value(boxCloseMargin),
    };

    startAnimation = () => {
        if (this.state.isOpen) {

            Animated.timing(this.stateAnimated.animation, {
                duration: 1000,
                toValue: boxCloseMargin,
                useNativeDriver: true,
                easing: Easing.back(1),
            }).start(()=>{

                Animated.timing(this.stateAnimated.animation, {
                    duration: 200,
                    toValue: boxCloseMargin-100,
                    useNativeDriver: true,
                    easing: Easing.bezier(0,1.01,1,1),
                }).start(()=>{

                    Animated.timing(this.stateAnimated.animation, {
                        duration: 600,
                        toValue: boxCloseMargin,
                        useNativeDriver: true,
                        easing: Easing.bounce,
                    }).start();

                })

            })
            
        } else {
            Animated.timing(this.stateAnimated.animation, {
                duration: 1000,
                toValue: -(boxOpenMargin - boxCloseMargin),
                useNativeDriver: true,
                easing: Easing.elastic(1)
            }).start();
        }
        this.setState({ isOpen: !this.state.isOpen });
    }


    render() {



        return (
            <View style={{ flex: 1 }}>
                <Animated.View style={{ flex: 1 }}>
                    <Animated.View style={[{ backgroundColor: 'rgba(250,0,0,.3)', borderWidth: 0, borderTopWidth: 0, borderColor: 'red', borderRadius: 40, height: boxHeight }, { transform: [{ translateY: this.stateAnimated.animation }] }]}>
                        <TouchableOpacity onPress={() => this.startAnimation()} style={{ position: 'absolute', bottom: 0, alignSelf: 'center' }}>
                            <Icon style={{ color: '#333', padding: 10 }} name={this.state.isOpen ? "ios-arrow-down" : "ios-arrow-up"} />
                        </TouchableOpacity>

                    </Animated.View>
                </Animated.View>
            </View>
        )
    }
}

export default _DoubleScreen
