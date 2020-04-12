import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base'

export const HashButton = ({text,onPress,active}) => {
    return (
        <TouchableOpacity
        onPress={()=>{onPress && onPress()}} 
        style={{
            padding: 5,
            borderRadius: 5,
            backgroundColor: active ? '#f03a3a' : '#fff', shadowColor: "#000",
            marginRight: 10,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,

        }}>
            <Text style={{color:active?'white':'#333'}}>#{text}</Text>
        </TouchableOpacity>
    )
}