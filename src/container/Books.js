import React, { Component } from 'react'
import { View, FlatList } from 'react-native'
import { MyParalax,WordAnimation, BookItem } from '../components';
import { List, ListItem, Thumbnail, Text, Left, Body, Right, Button, } from 'native-base';
import {imageUrl} from '../services/config'

export class Books extends Component {

    renderEmpty = () => {
        return <WordAnimation topText="Kitap App" title="Üzgünüm" text="Aradığını bulamadım" textStyle={{ lineHeight: 30, paddingLeft: 20 }} />
    }
    renderBottomButton = () => {
        return <Button full style={{ marginLeft: 10, marginRight: 10, borderRadius: 5 }}><Text>Tümünü Gör</Text></Button>
    }

    renderListRenderItem = ({item,index}) => {
        return (
           <BookItem/>
        )
    }

    render() {
        const ImageUrl = imageUrl+"booksheader.jpg";
        const items= [1,2,3,4,5,6,7,8,9,0,11,12,13];
        return (
            <View style={{ flex: 1 }}>
                <MyParalax
                    navigation={this.props.navigation}
                    title="Popüler Kitaplar"
                    titleStyle={{}}
                    titleContainerStyle={{ backgroundColor: 'rgba(0,0,0,0.4)'}}
                    image={ImageUrl}>


                    <List>
                        <FlatList
                            contentContainerStyle={{ paddingTop: 5, paddingBottom: 20 }}
                            data={items}
                            keyExtractor={(item) => item.index}
                            ListEmptyComponent={() => items.length == 0 && this.renderEmpty()}
                            renderItem={(item) => this.renderListRenderItem(item)} />
                    </List>

                </MyParalax>
            </View>
        )
    }
}

export default Books
