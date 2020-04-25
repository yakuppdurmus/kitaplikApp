import React,{ useState, useEffect } from 'react'
import { View } from 'react-native'
import { Input, Item, Button, Text, Icon,Footer,FooterTab, } from 'native-base'

export const CustomTabNav = (props) => {
    let [activeIndex, setActiveIndex] = useState(0);

    return (
        <Footer style={{backgroundColor:'#fff',borderTopWidth:0}}>
            <FooterTab style={{backgroundColor:'#fff'}}>
                <Button onPress={()=>{
                    setActiveIndex(0);
                    props.navigation.navigate('Home');
                }} 
                vertical active={activeIndex==0}>
                    <Icon type="Octicons" name="home"/>
                    <Text style={{fontWeight:'600'}} >Anasayfa</Text>
                </Button>
                <Button onPress={()=>{
                    setActiveIndex(1);
                    props.navigation.navigate('Library');
                }} 
                vertical active={activeIndex==1}>
                    <Icon type="Octicons" name="book" />
                    <Text style={{fontWeight:'600'}} >Kütüphane</Text>
                </Button>
                <Button onPress={()=>{
                    setActiveIndex(2);
                    props.navigation.navigate('Profile');
                }} 
                vertical active={activeIndex==2}>
                    <Icon type="MaterialIcons" name="person-outline" />
                    <Text style={{fontWeight:'600'}} >Profil</Text>
                </Button>
            </FooterTab>
        </Footer>
    )
}

