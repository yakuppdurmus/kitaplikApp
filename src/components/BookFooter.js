import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import Slider from '@react-native-community/slider';
import MyStore from '../services/MyStore';

import SafeAreaView from 'react-native-safe-area-view';
import { Icon } from 'native-base'
import { observer } from 'mobx-react';


const backgroundColor = "#ddd";
const activeColor = "#FF6665";
const minimumValue = 20;
const maximumValue = 35;

export const BookFooter = observer(() => {
    const [isShow, setIsShow] = useState(false);
    return (
        <SafeAreaView style={{ backgroundColor: backgroundColor, minHeight: 0 }}>
            <View style={{ backgroundColor: backgroundColor, position: 'absolute', right: 0, top: -40, paddingLeft: 15, paddingRight: 15 }}>
                <TouchableOpacity onPress={() => setIsShow(!isShow)}><Icon style={{ fontSize: 40 }} name={isShow ? "ios-arrow-down" : "ios-arrow-up"} /></TouchableOpacity>
            </View>
            {isShow && <View>
                <View style={rowStyle}>
                    <MyButton icon="ios-sunny" />
                    <MyButton active icon="ios-moon" />
                </View>
                <View style={rowStyle}>
                    <MyButton active text="Andada" />
                    <MyButton text="Lato" />
                    <MyButton text="Lora" />
                    <MyButton text="Releway" />
                </View>
                <View style={rowStyle}>
                    <MyButton icon="magnifier-remove"  onPress={()=>{
                        let value = MyStore.selectableTextStyle.fontSize-5;
                        if(value<minimumValue) return;
                        MyStore.selectableTextStyleSet({fontSize:value,lineHeight:value*1.3})

                    }} style={{ width: 50, flex: 0 }} type="SimpleLineIcons" />
                    <Slider
                        style={{ flex: 1, height: 40 }}
                        minimumValue={minimumValue}
                        maximumValue={maximumValue}
                        step={5}
                        value={MyStore.selectableTextStyle.fontSize}
                        thumbTintColor={activeColor}
                        onValueChange={(value) => {
                            MyStore.selectableTextStyleSet({fontSize:value,lineHeight:value*1.3})
                            
                        }}
                        minimumTrackTintColor={activeColor}
                        maximumTrackTintColor="#000000"
                    />
                    <MyButton onPress={()=>{
                         let value = MyStore.selectableTextStyle.fontSize+5;
                         if(value>maximumValue) return;
                         MyStore.selectableTextStyleSet({fontSize:value,lineHeight:value*1.3})

                    }} icon="magnifier-add" style={{ width: 50, flex: 0 }} type="SimpleLineIcons" />
                </View>
                <View style={rowStyle}>
                    <MyButton text="Dikey" />
                    <MyButton active text="Yatay" />
                </View>
            </View>}
        </SafeAreaView>
    )
})

const MyButton = ({ text, icon, type, onPress, style, active }) => {

    return (
        <TouchableOpacity onPress={onPress} style={{ flex: 1, alignItems: 'center', ...style }}>
            {text && <Text style={{ paddingBottom: 5, paddingTop: 5, fontWeight: active ? 'bold' : 'normal', color: active ? activeColor : '#000' }}>{text}</Text>}
            {icon && <Icon style={{ color: active ? activeColor : '#000' }} name={icon} type={type ? type : "Ionicons"} />}
        </TouchableOpacity>
    )
}

const rowStyle = { flexDirection: 'row', width: '100%', borderBottomWidth: 1, borderColor: '#aaa', paddingBottom: 10, paddingTop: 10 };
