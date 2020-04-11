import React from 'react'
import { View, SafeAreaView } from 'react-native'
import { Left, Right, Body, Icon, Text, } from 'native-base';

export const MyHeader = ({ back, navigation, text, notification,search,transparent }) => {
    return (
        <SafeAreaView style={{ backgroundColor: transparent?'rgba(255,255,255,.5)':'#fff' }}>
            <View style={{ height: 50, width: '100%', backgroundColor: transparent?'transparent':'#fff', flexDirection: 'row', justifyContent: 'center', borderBottomWidth: transparent?0:1, borderColor: '#ddd' }}>
                <View style={{ width: 100, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row' }}>
                    {back ? <Icon onPress={() => navigation.goBack()} name="ios-arrow-back" style={{ color: '#333', paddingLeft: 10, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />
                        :
                        <Icon onPress={() => navigation.openDrawer()} name="ios-menu" style={{ color: '#333', paddingLeft: 10, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />}
                </View>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {text && <Text style={{ paddingLeft: 20, paddingRight: 20, fontSize: 20, fontWeight: '600', color: '#333' }} numberOfLines={1}>{text}</Text>}
                </View>
                <View style={{ width: 100, justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                    {search && <Icon type="Feather" onPress={()=>{navigation.navigate('Search')}} name="search" style={{ color: '#333', paddingLeft: 8, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />}
                    {notification && <Icon type="Feather" onPress={()=>{navigation.navigate('Notification')}} name="bell" style={{ color: '#333', paddingLeft: 8, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />}
                </View>
            </View>
        </SafeAreaView>
    )
}

{/* <Text> MyHeader </Text>
            <Text onPress={() => {
                console.log(props.navigation.navigation)
                props.navigation.navigation.openDrawer();
            }}>Menu Aç</Text>
<Text onPress={() => props.navigation.navigation.goBack()}>GERİ </Text> */} 
