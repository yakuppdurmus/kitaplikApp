import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { MyParalax,WordAnimation } from '../components';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, } from 'native-base';


export class Books extends Component {

    SearchEmpty = () => {
        return <WordAnimation topText="Kitap App" title="Üzgünüm" text="Aradığını bulamadım" textStyle={{ lineHeight: 30, paddingLeft: 20 }} />
    }
    SearchBottomButton = () => {
        return <Button full style={{ marginLeft: 10, marginRight: 10, borderRadius: 5 }}><Text>Tümünü Gör</Text></Button>
    }

    SearchListRenderItem = ({item,index}) => {
        return (
            <ListItem key={"key_"+index} thumbnail style={{ marginBottom: 10 }}>
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

    render() {
        const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR649JrXgh93mAuyxKu6sQOybUTLwW17uRPonlbLg1T-LyHgN-T&usqp=CAU;"
        const items= [1,2,3,4,5,6,7,8,9,0,11,12,13];
        return (
            <View style={{ flex: 1 }}>
                <MyParalax
                    navigation={this.props.navigation}
                    title="Popüler Kitaplar"
                    titleStyle={{}}
                    titleContainerStyle={{ backgroundColor: 'rgba(0,0,0,0.4)'}}
                    image={imageUrl}>


                    <List>
                        <FlatList
                            contentContainerStyle={{ paddingTop: 5, paddingBottom: 20 }}
                            data={items}
                            keyExtractor={(item) => item.index}
                            ListEmptyComponent={() => items.length == 0 && this.SearchEmpty()}
                            renderItem={(item) => this.SearchListRenderItem(item)} />
                    </List>

                </MyParalax>
            </View>
        )
    }
}

export default Books
