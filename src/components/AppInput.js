import React from 'react'
import { View } from 'react-native'
import { Input, Item, Button, Text } from 'native-base'

export const AppInput = ({input,inputChange,title,inputStyle,textStyle,containerStyle,secureTextEntry,reqired,placeholder,autoFocus}) => {
    return <View style={{ marginBottom: 5 }}>
        <Text style={Object.assign({ color: '#fff', marginBottom: 5, fontSize: 14, fontFamily: 'Montserrat-Medium' },textStyle)}>{title}{reqired && <Text style={{color:'red'}}> *</Text>}</Text>
        <View style={Object.assign({ height: 50, backgroundColor: '#fff', borderRadius: 10 },containerStyle)}>
            <Input
                autoFocus = {autoFocus}
                placeholderTextColor="#ccc"
                style={Object.assign({ paddingLeft: 10,borderColor:'#aaa',borderRadius:10, fontFamily: 'Montserrat-Medium' },inputStyle)}
                placeholder={placeholder}
                value={input}
                secureTextEntry = {!!secureTextEntry}
                onChangeText ={(input)=>inputChange(input)} />
        </View>
    </View>
}