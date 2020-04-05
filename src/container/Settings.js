import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Settings extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> Settings </Text>
                <Text onPress={()=>this.props.navigation.navigate('MyAccount')}> MyAccount </Text>
                <Text onPress={()=>this.props.navigation.goBack()}> Test Go Back  </Text>

            </View>
        )
    }
}

export default Settings
