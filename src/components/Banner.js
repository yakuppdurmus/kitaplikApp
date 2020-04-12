import React from 'react';
import {View,Image,Dimensions} from 'react-native'
import { Text } from "native-base";

const screenWidth = Dimensions.get('window').width;

export const Banner = ({url}) =>{
    return(
        <View>
            <Image
                resizeMode="cover"
                style={{width:screenWidth,height:200,}}
                source={{uri:url}}
                />
        </View>
    )
}