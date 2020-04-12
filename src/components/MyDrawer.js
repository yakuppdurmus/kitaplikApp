import React from 'react'
import { Text, View } from 'react-native'

const onPress= (navigation,screen)=>{
    navigation.navigate(screen);
}

export const MyDrawer = ({navigation}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => onPress(navigation,'Profile')}> Profile </Text>
            <Text onPress={() => onPress(navigation,'Tab1')}> Tab1 </Text>
            <Text onPress={() => onPress(navigation,'Categories')}> Kategoriler </Text>
            <Text onPress={() => onPress(navigation,'Login')}> Çıkış Yap </Text>
        </View>
    )
}
