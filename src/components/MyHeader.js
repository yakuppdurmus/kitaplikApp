import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class MyHeader extends Component {
    render() {
        return (
            <View style={{height:100,width:'100%',backgroundColor:'#aaa',justifyContent:'center',alignItems:'center'}}>
                <Text> MyHeader </Text>
                <Text onPress={()=>{
                    console.log(this.props.navigation.navigation)
                    this.props.navigation.navigation.openDrawer();
                }}>Menu Aç</Text>
                <Text onPress={()=>this.props.navigation.navigation.goBack()}>GERİ </Text>
            </View>
        )
    }
}

export default MyHeader
