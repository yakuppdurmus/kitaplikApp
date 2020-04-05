import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Profile extends Component {
    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text> Profile </Text>
                <Text onPress={()=>this.props.navigation.goBack()}> Go Back  </Text>
            </View>
        )
    }
}

export default Profile
