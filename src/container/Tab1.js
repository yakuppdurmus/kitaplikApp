import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Tab1 extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> Tab1 </Text>
                <Text onPress={()=>this.props.navigation.goBack()}> Test Go Back  </Text>
            </View>
        )
    }
}

export default Tab1
