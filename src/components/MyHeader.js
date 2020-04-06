import React from 'react'
import { View } from 'react-native'
import { Left, Right, Body, Icon, Text, } from 'native-base';

export const MyHeader = (props) => {
    return (
        <View style={{ height: 50, width: '100%', backgroundColor: '#fff', flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                {props.back ? <Icon onPress={()=>props.navigation.goBack()} name="ios-arrow-back" style={{ color: '#555', paddingLeft: 8, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />
                :
                <Icon onPress={()=>props.navigation.openDrawer()} name="ios-menu" style={{ color: '#555', paddingLeft: 8, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />}
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                {props.text && <Text style={{paddingLeft:20,paddingRight:20}} numberOfLines={1}>{props.text}</Text>}
            </View>
            <View style={{ width: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                {props.notification && <Icon  type="Feather" name="bell" style={{ color: '#555', paddingLeft: 8, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />}
            </View>
        </View>
    )
}

{/* <Text> MyHeader </Text>
            <Text onPress={() => {
                console.log(props.navigation.navigation)
                props.navigation.navigation.openDrawer();
            }}>Menu Aç</Text>
<Text onPress={() => props.navigation.navigation.goBack()}>GERİ </Text> */} 
