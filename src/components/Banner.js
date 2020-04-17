import React from 'react';
import { View, Image, Dimensions,TouchableOpacity,Platform } from 'react-native'
import { Text } from "native-base";

const screenWidth = Dimensions.get('window').width;

export const Banner = ({ url, imageStyle, containerStyle, title, subTitle,text,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={onPress ? .4 : 1} style={Object.assign({ backgroundColor: '#fff', alignItems: 'center' }, containerStyle)}>
            {title&& <Text style={{width:'100%',fontSize:30,fontWeight:'900',padding:10,fontFamily:Platform.OS=="ios" ? "Baskerville-SemiBold" : "serif" }}>{title}</Text>}
            <Image
                resizeMode="cover"
                style={Object.assign({ width: screenWidth, height: 200, }, imageStyle)}
                source={{ uri: url }}
            />
            {subTitle&& <View style={{width:'100%',padding:10}}>
                <Text style={{fontSize:14}}>{subTitle}</Text>
                <Text style={{fontWeight:'600',fontSize:14}}>{text}</Text>
            </View>}
        </TouchableOpacity>
    )
}