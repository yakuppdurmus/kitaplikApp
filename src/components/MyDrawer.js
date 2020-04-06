import React from 'react'
import { Text, View } from 'react-native'

export const MyDrawer = (props) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => props.navigation.navigate("Profile")}> Profile </Text>
            <Text onPress={() => props.navigation.navigate("Tab1")}> Tab1 </Text>
        </View>
    )
}
