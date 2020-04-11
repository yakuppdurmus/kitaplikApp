import React from 'react'
import { View,FlatList } from 'react-native'
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, } from 'native-base';
import {WordAnimation} from '../components';



export const SearchList = ({ navigation, items, term }) => {
    // if (term.length >= 3 && items.length == 0) {
    //     return <View><Text>Aradığını Bulamadık</Text></View>
    // }
    return (
        <List>
            <FlatList
                contentContainerStyle={{ paddingTop: 5,paddingBottom:150}}
                data={items.slice(0, 10)}
                keyExtractor={(item) => item.index}
                ListEmptyComponent={() => term.length > 2 && SearchEmpty()}
                ListFooterComponent={() => items.length > 0 && term.length > 2 && SearchBottomButton()}
                renderItem={(item) => SearchListRenderItem(item)} />
        </List>
    )
}

const SearchEmpty = () => {
    return  <WordAnimation topText="Kitap App" title="Üzgünüm" text="Aradığını bulamadım" textStyle={{lineHeight:30,paddingLeft:20}}/>
}
const SearchBottomButton = () => {
    return <Button full style={{marginLeft:10,marginRight:10,borderRadius:5}}><Text>Tümünü Gör</Text></Button>
}

const SearchListRenderItem = (item) => {
    return (
        <ListItem thumbnail style={{ marginBottom: 10 }}>
            <Left>
                <Thumbnail style={{ width: 80, height: 80 }} square source={require('../assets/images/bg1.jpg')} />
            </Left>
            <Body>
                <Text>Kitap Adı</Text>
                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
            </Body>
        </ListItem>
    )
}