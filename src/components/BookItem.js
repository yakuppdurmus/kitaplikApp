import React from 'react';
import {ListItem,Left,Text,Body} from 'native-base';
import {Image} from 'react-native'
export const BookItem = ({name,description,image}) =>{
    return(
        <ListItem thumbnail style={{ marginBottom: 10 }}>
            <Left>
                {/* <Image style={{ width: 80, height: 80,borderRadius:5 }} source={require('../assets/images/bg1.jpg')} /> */}
            </Left>
            <Body>
                <Text>{name ? name : "Kitap Adı"}</Text>
                <Text note numberOfLines={1}>{description ? description : "Its time to build a difference . ."}</Text>
            </Body>
        </ListItem>
    )
}