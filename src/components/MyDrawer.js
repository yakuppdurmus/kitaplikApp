import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MyDrawer extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text onPress={()=>this.props.navigation.navigate("Profile")}> Profile </Text>
                <Text onPress={()=>this.props.navigation.navigate("Tab1")}> Tab1 </Text>
            </View>
        )
    }
}

export default MyDrawer
