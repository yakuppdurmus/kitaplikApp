import React from 'react'
import { View,FlatList } from 'react-native'
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, } from 'native-base';
import {WordAnimation, BookItem, FullButton} from '../components';



export const SearchList = ({ navigation, items, term }) => {
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
    return <FullButton text="Tümünü Gör" style={{marginLeft:15,marginRight:15}}/>
}

const SearchListRenderItem = (item) => {
    return (
        <BookItem/>
    )
}