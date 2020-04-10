import React from 'react';
import { TouchableOpacity } from 'react-native';
import {Icon} from 'native-base'


export const FabButton = () => {
    return (
        <TouchableOpacity
            style={{ width: 50, height: 50, position: 'absolute', zIndex: 20, right: 40, bottom: 40, borderRadius: 25, backgroundColor: '#e74c3c', paddingTop: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Icon style={{ color: 'white' }} name="ios-arrow-down" />
        </TouchableOpacity>
    )
}