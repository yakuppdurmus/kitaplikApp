import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MyAccount extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> MyAccount </Text>
                <Text onPress={()=>this.props.navigation.navigate('Profile')}> Profile </Text>
                <Text onPress={()=>this.props.navigation.goBack()}> Go Back </Text>
                <Text onPress={()=>this.props.navigation.openDrawer()}>Menu Aç</Text>

            </View>
        )
    }
}

export default MyAccount
