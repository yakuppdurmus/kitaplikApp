import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Router from './Router';

//Custome Theme Variable
import { StyleProvider } from 'native-base'
import getTheme from './assets/native-base-theme/components';
import customTheme from './assets/native-base-theme/variables/customTheme';

export class Container extends Component {
    render() {
        return (
            <StyleProvider style={getTheme(customTheme)}>
                <Router />
            </StyleProvider>
        )
    }
}

export default Container
