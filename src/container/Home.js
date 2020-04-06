import React, { Component } from 'react'
import { Text, View } from 'react-native';
import {MyHeader} from '../components';


export class Home extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <MyHeader 
                navigation={this.props.navigation} 
                text="Anasayfa"
                notification
                />
                <Text onPress={()=>{}}> Home Page </Text>
                <Text onPress={()=>{this.props.navigation.navigate('Login')}}> Logout </Text>
                <Text onPress={()=>this.props.navigation.goBack()}> Test Go Back  </Text>

            </View>
        )
    }
}

export default Home
