import React, { Component } from 'react'
import { View} from 'react-native'
var Spinner = require('react-native-spinkit');



export const Loader = () =>{
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',backgroundColor:'#fff' }}>
            <Spinner size={40} type={"Wave"} color={'#2980b9'} />
        </View>
    )
}
