import React from 'react'
import { View } from 'react-native'
import { Input, Item, Button, Text } from 'native-base'

export const AppInput = ({input,inputChange,title,inputStyle,textStyle,containerStyle,secureTextEntry}) => {
    return <View style={{ marginBottom: 5 }}>
        <Text style={{ color: '#fff', marginBottom: 5, fontSize: 14, fontFamily: 'Montserrat-Medium' }}>{title}</Text>
        <View style={{ height: 50, backgroundColor: '#fff', borderRadius: 10 }}>
            <Input
                style={{ paddingLeft: 10, fontFamily: 'Montserrat-Medium' }}
                placeholder=""
                value={input}
                secureTextEntry = {!!secureTextEntry}
                onChangeText ={(input)=>inputChange(input)} />
        </View>
    </View>
}