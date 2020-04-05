import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Login extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> Login </Text>
                <Text onPress={()=>this.props.navigation.navigate('Home')}> Login </Text>
                <Text onPress={()=>this.props.navigation.navigate('Register')}>go Register </Text>
                <Text onPress={()=>this.props.navigation.goBack()}> Test Go Back  </Text>
                

            </View>
        )
    }
}

export default Login
