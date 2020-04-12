import React, { Component } from 'react'
import { View,Image } from 'react-native'
import { Container, Header, Content, Button, ListItem, Text, Icon, Left, Body, Right, Switch, Title } from 'native-base';

import { DoubleScreen, MyHeader } from '../components';
import { ScrollView } from 'react-native-gesture-handler';



export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader
                    search
                    notification
                    navigation={this.props.navigation}
                    text="Profil" />
                <ScrollView>
                    <RenderItem type="title" text="Hesap Ayarları" />
                    <View style={{ backgroundColor: 'white' }}>
                        <RenderItem iconName="mail-outline" text="E-Posta" value="admin@kitaplikapp.com" />
                        <RenderItem text="Üyeliğim" value="Standart" iconName="person-outline" />
                    </View>

                    <RenderItem type="title" text="Uygulama Ayarları" />
                    <View style={{ backgroundColor: 'white' }}>
                        <RenderItem text="Gizlilik" iconName="security" />
                        <RenderItem text="Sözleşme" iconName="assignment" />
                        <RenderItem text="Sıkça Sorulan Sorular" iconType="AntDesign" iconName="questioncircleo" />
                        <RenderItem text="Geri Bildirim" rightIconType="Feather" rightIconName="external-link" iconType="FontAwesome" iconName="pencil-square-o" />
                        <RenderItem text="Uygulama Dili" iconName="language" />
                        {/* <RenderItem text="Dosyaları Otomatik Olarak İndir" description value="Bu seçenek ile dosyaları otomatik olarak internetten indirebilir dilediğiniz zaman internet olmadan uygulama içerisinde gezinerek kitap okuyabilirsiniz. (İnternet kullanımını arttırır)" /> */}
                    </View>

                    <RenderItem type="title" text="Premium" />
                    <View style={{ backgroundColor: 'white' }}>
                        <RenderItem text="Üyeliği Yeniden Yükle" iconType="FontAwesome" iconName="diamond" />
                        <RenderItem text="Çıkış Yap" iconName="logout" iconType="AntDesign" />
                        {/* <RenderItem text="Dosyaları Otomatik Olarak İndir" description value="Bu seçenek ile dosyaları otomatik olarak internetten indirebilir dilediğiniz zaman internet olmadan uygulama içerisinde gezinerek kitap okuyabilirsiniz. (İnternet kullanımını arttırır)" /> */}
                    </View>

                    <RenderItem type="title" text="Uygulama Hakkında" />                    
                    <View style={{backgroundColor:'white',padding:10,justifyContent:'center',alignItems:'center'}}>
                        <Image
                        style={{width:'100%',height:50}}
                        resizeMode="contain"
                        source={require('../assets/images/Logo.png')}
                        />
                        <Text style={{color:'#aaa',fontSize:12,textAlign:'center'}}>kitaplikapp.com{"\n"}Copyright(2020)</Text>

                    </View>
                </ScrollView>

            </View>
        )
    }
}

export default Profile

export const RenderItem = ({ text, value, type, iconType, iconName, description,rightIconName,rightIconType }) => {
    if (type == "title")
        return (
            <ListItem icon>
                <Body>
                    <Text style={{ fontWeight: '600' }}>{text}</Text>
                </Body>
            </ListItem>
        )

    return (
        <ListItem icon onPress={()=>{}}>
            {iconName && <Left><Icon type={iconType ? iconType : "MaterialIcons"} style={{ color: "#f03a3a", width: 32, marginLeft: -5, marginRight: -10, fontSize: 23 }} active name={iconName} /></Left>}
            <Body>
                <Text>{text}</Text>
            </Body>
            <Right>
                <Text style={{ fontSize: 14 }}>{value}</Text>
                {rightIconName && <Icon type={rightIconType ? rightIconType : "MaterialIcons"} style={{ color: "#f03a3a", width: 32, marginLeft: -5, marginRight: 0, fontSize: 23 }} active name={rightIconName} />}
            </Right>

        </ListItem>
    )
}

