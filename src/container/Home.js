import React, { Component } from 'react'
import { Text, View } from 'react-native'


export class Home extends Component {

    render() {
        return (
            <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text onPress={()=>{}}> Home Page </Text>
                <Text onPress={()=>{this.props.navigation.navigate('Login')}}> Logout </Text>
                <Text onPress={()=>this.props.navigation.goBack()}> Test Go Back  </Text>


            </View>
        )
    }
}

export default Home
