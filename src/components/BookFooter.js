import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import Slider from '@react-native-community/slider';

import SafeAreaView from 'react-native-safe-area-view';
import { Icon } from 'native-base'
export const BookFooter = () => {
    const [isShow, setIsShow] = useState(false);

    return (
        <SafeAreaView style={{ backgroundColor: 'white', minHeight: 0 }}>
            <View style={{backgroundColor:'white',position:'absolute',right:0,top:-40,paddingLeft:15,paddingRight:15}}>
            <TouchableOpacity onPress={()=>setIsShow(!isShow)}><Icon style={{fontSize:45}} name={isShow ? "ios-close" : "ios-arrow-round-up"}/></TouchableOpacity>
            </View>
           {isShow &&<View><View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#aaa', paddingBottom: 10, paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Icon name="ios-sunny" /></TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Icon name="ios-moon" /></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#aaa', paddingBottom: 10, paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Text style={{paddingBottom:5,paddingTop:5}}>Andada</Text></TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Text style={{paddingBottom:5,paddingTop:5}}>Lato</Text></TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Text style={{paddingBottom:5,paddingTop:5}}>Lora</Text></TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Text style={{paddingBottom:5,paddingTop:5}}>Releway</Text></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#aaa', paddingBottom: 10, paddingTop: 10 }}>
                <TouchableOpacity style={{ width:50, alignItems: 'center' }}><Icon type="SimpleLineIcons" name="magnifier-remove" /></TouchableOpacity>
                <Slider
                    style={{ flex: 1, height: 40 }}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor="#000000"
                    maximumTrackTintColor="#000000"
                />
                <TouchableOpacity style={{ width:50, alignItems: 'center' }}><Icon type="SimpleLineIcons" name="magnifier-add" /></TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#aaa', paddingBottom: 10, paddingTop: 10 }}>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Text style={{paddingBottom:5,paddingTop:5}}>Yatay</Text></TouchableOpacity>
                <TouchableOpacity style={{ flex: 1, alignItems: 'center' }}><Text style={{paddingBottom:5,paddingTop:5}}>Dikey</Text></TouchableOpacity>
            </View></View>}
        </SafeAreaView>
    )
}