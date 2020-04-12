import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Router from './Router';

//Custome Theme Variable
import { StyleProvider } from 'native-base'
import getTheme from './assets/native-base-theme/components';
import customTheme from './assets/native-base-theme/variables/customTheme';
import FlashMessage from "react-native-flash-message";

export class Container extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <StyleProvider style={getTheme(customTheme)}>
                    <Router />
                </StyleProvider>
                <FlashMessage an titleStyle={{fontSize:30,height:500}} style={{height:100}} textStyle={{height:500}} ref="refFlashMessage" position="top" />
            </View>
        )
    }
}

export default Container
