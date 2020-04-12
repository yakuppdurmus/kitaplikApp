import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native';
import { MyHeader, CardSwiper, ImageSwiper, Banner } from '../components';
import { showMessage, hideMessage } from "react-native-flash-message";


export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    onPressAll(id) {
        this.props.navigation.navigate('Books');
    }

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

                    <Banner url={"https://turkagram.com/wp-content/uploads/2017/03/kitap-ve-cay-keyfi-cocukyetistirmebilgeligi-aslidalan-cocukpsikolojisi-kitap.jpeg"} />
                    <CardSwiper
                        ready={false}
                        onPressBookMark={(id) => { 
                            
                            showMessage({
                            message: "Favorilere Eklendi",
                            type: "info",
                          }); }
                        }
                        onPressCard={(id) => { this.props.navigation.navigate('BookDetail') }}
                        items={items}
                        title="Ücretsiz"
                    />

                    <Banner url={"https://image.freepik.com/free-photo/open-book-with-glasses-wooden-table-against-background-set-books-vintage-toning_101969-514.jpg"} />

                    <ImageSwiper
                        onPressCard={() => { this.props.navigation.navigate('Books') }}
                        items={items}
                        title="Kategoriler"
                        isAll
                        categoryId={11}
                        onPressAll={(id) => { this.props.navigation.navigate('Library') }}
                    />



                    <CardSwiper
                        onPressBookMark={() => {  showMessage({
                            message: "Simple message",
                            type: "info",
                          }); }}
                        onPressCard={() => { this.props.navigation.navigate('BookDetail') }}
                        items={items}
                        title="Popüler"
                        isAll
                        onPressAll={(id) => this.onPressAll(id)}
                    />

                </ScrollView>

            </View>
        )
    }
}

export default Home;

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
