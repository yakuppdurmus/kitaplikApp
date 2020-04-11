import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native';
import { MyHeader, CardSwiper, ImageSwiper } from '../components';
import { Card, CardItem, Body } from 'native-base';


export class Home extends Component {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader
                    navigation={this.props.navigation}
                    text="Anasayfa"
                    notification
                    search
                />
                <ScrollView>
                    {/* <Text onPress={() => { }}> Home Page </Text>
                <Text onPress={() => { this.props.navigation.navigate('Login') }}> Logout </Text>
                <Text onPress={() => this.props.navigation.goBack()}> Test Go Back  </Text> */}

                    <CardSwiper
                        ready={false}
                        onPressBookMark={() => { alert('b') }}
                        onPressCard={() => { alert('a') }}
                        items={items}
                        title="Ücretsiz"
                    />

                    <ImageSwiper
                        onPressBookMark={() => { alert('b') }}
                        onPressCard={() => { alert('a') }}
                        items={items}
                        title="Kateogirler"
                        isAll
                        categoryId={11}
                        onPressAll={(data) => { alert(data) }}
                    />

                    <CardSwiper
                        onPressBookMark={() => { alert('b') }}
                        onPressCard={() => { alert('a') }}
                        items={items}
                        title="Popüler"
                    />
                </ScrollView>

            </View>
        )
    }
}

export default Home

const items = [
    {
        id: 100,
        title: "Ne Zaman?",
        author: "Daniel Pink",
        image: "https://galeri14.uludagsozluk.com/860/murit-filmi_1992227.jpg",
        isListen: true,
        isFree: false,
        isBookMark: false,
    },
    {
        id: 101,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: "https://mcdn01.gittigidiyor.net/50120/tn50/501202203_tn50_0.jpg",
        isListen: false,
        isFree: true,
        isBookMark: true,
    },
    {
        id: 102,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: "https://mcdn01.gittigidiyor.net/50120/tn50/501202203_tn50_0.jpg",
        isListen: false,
        isFree: false,
        isBookMark: true,

    },
    {
        id: 103,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: "https://mcdn01.gittigidiyor.net/50120/tn50/501202203_tn50_0.jpg",
        isListen: true,
        isFree: true,
        isBookMark: false,
    }
]
