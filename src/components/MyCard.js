import React from 'react'
import { View } from 'react-native'

export const MyCard = ({ style, children }) => {
    const komponentStyle = {
        padding:5,
        minWidth: 50,
        minHeight: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    };
    return (
        <View style={Object.assign(komponentStyle, style)}>
            {children && children}
        </View>
    )
}