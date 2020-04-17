import React, { Component } from 'react'
import { Text, View, ScrollView,Dimensions} from 'react-native';
import { MyHeader, CardSwiper, ImageSwiper, Banner } from '../components';
import { showMessage, hideMessage } from "react-native-flash-message";
import {imageUrl} from '../services/config'
const screenWidth=Dimensions.get('screen').width;
const screenHeight=Dimensions.get('screen').height;
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

                    <Banner url={imageUrl+"kitap-kahve.jpg"} />
                    
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

                    <Banner url={imageUrl+"kitap.jpg"} />
                    <Banner onPress={()=>this.props.navigation.navigate('Categories')} containerStyle={{padding:10}} title="Okumaya Başla" text="- D. Scilus"  subTitle="Kitaplıklar aklın tedavi yerleridir." imageStyle={{width:screenWidth,height:screenWidth/1061*800}} url={imageUrl+'acik-kitap.jpg'} />

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
        image: imageUrl+'film.jpg',
        isListen: true,
        isFree: false,
        isBookMark: false,
    },
    {
        id: 101,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: imageUrl+'eldiven.jpg',
        isListen: false,
        isFree: true,
        isBookMark: true,
    },
    {
        id: 102,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: imageUrl+'eldiven.jpg',
        isListen: false,
        isFree: false,
        isBookMark: true,

    },
    {
        id: 103,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: imageUrl+'eldiven.jpg',
        isListen: true,
        isFree: true,
        isBookMark: false,
    }
]
