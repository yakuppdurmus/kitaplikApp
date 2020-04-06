import React, { Component } from 'react'
import { Text, View,SafeAreaView } from 'react-native'
import Router from './Router';

//Custome Theme Variable
import { StyleProvider } from 'native-base'
import getTheme from './assets/native-base-theme/components';
import customTheme from './assets/native-base-theme/variables/customTheme';

export class Container extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(customTheme)}>
                <SafeAreaView style={{flex:1}}>
                <Router />
                </SafeAreaView>
            </StyleProvider>
        )
    }
}

export default Container
