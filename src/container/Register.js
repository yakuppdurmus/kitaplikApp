import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AppBackground } from '../components';

export class Register extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <AppBackground type="header"/>
                <Text> Register Page </Text>
                <Text onPress={()=>this.props.navigation.navigate("Login")}> go Login </Text>
            </View>
        )
    }
}

export default Register
