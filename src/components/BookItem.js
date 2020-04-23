import React from 'react';
import {ListItem,Left,Text,Body} from 'native-base';
import {Image} from 'react-native'
import {imageUrl} from '../services/config';
export const BookItem = ({name,description,image}) =>{
    return(
        <ListItem thumbnail style={{ marginBottom: 10 }}>
            <Left>
                <Image style={{ width: 80, height: 80,borderRadius:5 }} source={{uri:imageUrl+'eldiven.jpg'}} />
            </Left>
            <Body>
                <Text>{name ? name : "Kitap Adı"}</Text>
                <Text note numberOfLines={1}>{description ? description : "Its time to build a difference . ."}</Text>
            </Body>
        </ListItem>
    )
}