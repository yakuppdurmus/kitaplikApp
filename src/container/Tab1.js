import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { DoubleScreen } from '../components'

export class Tab1 extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <DoubleScreen/>
            </View>
        )
    }
}

export default Tab1
