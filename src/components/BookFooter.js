import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, Animated } from 'react-native';
import Slider from '@react-native-community/slider';
import MyStore from '../services/MyStore';

import SafeAreaView from 'react-native-safe-area-view';
import { Icon, Button } from 'native-base'
import { observer } from 'mobx-react';


const backgroundColor = "#ddd";
const activeColor = "#FF6665";

export const BookFooter = observer(({navigation}) => {
    const [isShow, setIsShow] = useState(false);
    return (
        <SafeAreaView style={{ backgroundColor: backgroundColor, minHeight: 0 }}>
            <View style={{ backgroundColor:'transparent', paddingLeft: 15,flexDirection:'row',justifyContent:'space-between', paddingRight: 15 }}>
                <TouchableOpacity onPress={() =>navigation.goBack()  }><Icon style={{ fontSize: 40 }} name={"ios-arrow-back"} /></TouchableOpacity>
                <TouchableOpacity onPress={() => setIsShow(!isShow)}><Icon style={{ fontSize: 40 }} name={isShow ? "ios-arrow-down" : "ios-arrow-up"} /></TouchableOpacity>

            </View>
            {isShow && <View>
                <View style={rowStyle}>
                    <MyButton 
                    active={!MyStore.nightMode}
                    onPress={() => {
                        MyStore.nightModeSet(false);
                    }} icon="ios-sunny" />
                    <MyButton 
                    active={MyStore.nightMode}
                    onPress={() => {
                        MyStore.nightModeSet(true);
                    }} icon="ios-moon" />
                </View>
                <View style={rowStyle}>
                    <MyButton active={MyStore.selectableTextStyle.fontFamily == "Andada-Regular"} onPress={()=>{MyStore.selectableTextStyleSet({fontFamily:"Andada-Regular"})}} text="Andada" />
                    <MyButton active={MyStore.selectableTextStyle.fontFamily == "Lato-Regular"} onPress={()=>{MyStore.selectableTextStyleSet({fontFamily:"Lato-Regular"})}} text="Lato" />
                    <MyButton active={MyStore.selectableTextStyle.fontFamily == "Lora-Regular"} onPress={()=>{MyStore.selectableTextStyleSet({fontFamily:"Lora-Regular"})}} text="Lora" />
                    <MyButton active={MyStore.selectableTextStyle.fontFamily == "Releway-Regular"} onPress={()=>{MyStore.selectableTextStyleSet({fontFamily:"Releway-Regular"})}} text="Releway" />
                </View>
                <View style={rowStyle}>
                    <MyButton icon="magnifier-remove" onPress={() => {
                        MyStore.textSizeDown()
                    }} style={{ width: 50, flex: 0 }} type="SimpleLineIcons" />
                    <Slider
                        style={{ flex: 1, height: 40 }}
                        minimumValue={MyStore.textMinimumValue}
                        maximumValue={MyStore.textMaximumValue}
                        step={3}
                        value={MyStore.selectableTextStyle.fontSize}
                        thumbTintColor={activeColor}
                        onValueChange={(value) => {
                            MyStore.textSizeSet(value);
                        }}
                        minimumTrackTintColor={activeColor}
                        maximumTrackTintColor="#000000"
                    />
                    <MyButton onPress={() => {
                        MyStore.textSizeUp()
                    }} icon="magnifier-add" style={{ width: 50, flex: 0 }} type="SimpleLineIcons" />
                </View>
                {/* <View style={rowStyle}>
                    <MyButton text="Dikey" />
                    <MyButton active text="Yatay" />
                </View> */}
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