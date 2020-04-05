import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Register extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> Register Page </Text>
                <Text onPress={()=>this.props.navigation.navigate("Login")}> go Login </Text>
            </View>
        )
    }
}

export default Register
