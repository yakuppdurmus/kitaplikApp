import React from 'react'
import { View, SafeAreaView ,TouchableOpacity} from 'react-native'
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';


export const SearchBar = ({ navigation,onChangeText,onPressClear,term }) => {
    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <Header searchBar style={{ backgroundColor: '#fff', paddingTop: 0 }}>
                <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}>
                    <Icon onPress={() => navigation.goBack()} name="ios-arrow-back" style={{color: '#555', paddingLeft: 8, paddingRight: 8, paddingTop: 7.5, paddingBottom: 7.5 }} />
                    </TouchableOpacity>
                <Item rounded style={{ height: 40 }}>
                    <Icon name="ios-search" />
                    <Input value={term} autoFocus placeholder="Kitabını Bul" onChangeText={(text)=>onChangeText(text)} />
                </Item>
                <Button onPress={onPressClear} transparent>
                    <Text>Sil</Text>
                </Button>
            </Header>
        </SafeAreaView>
    )
}

{/* <Text> MyHeader </Text>
            <Text onPress={() => {
                console.log(props.navigation.navigation)
                props.navigation.navigation.openDrawer();
            }}>Menu Aç</Text>
<Text onPress={() => props.navigation.navigation.goBack()}>GERİ </Text> */} 
