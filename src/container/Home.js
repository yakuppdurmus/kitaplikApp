import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions } from 'react-native';
import { MyHeader, CardSwiper, ImageSwiper, Banner, Loader } from '../components';
import { showMessage, hideMessage } from "react-native-flash-message";
import { imageUrl } from '../services/config'
const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;
import { books, category, popular } from '../services'

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            booksMin: [],

        }
    }

    componentDidMount() {
        this.requestData();
    }
    async requestData() {

        await this.getEnUygunKitaplar();
        await this.getKategoriler();
        await this.getPopuler();
        this.setState({ ready: true });

    }
    async getEnUygunKitaplar() {
        //en uygun kitaplar
        $sort = 2;
        let responseBooksMin = await books($sort);
        console.log("RESPONSE ", responseBooksMin);

        if (!responseBooksMin) {
            console.log("Response boş");
        }

        if (responseBooksMin.status) {

            this.setState({ booksMin: responseBooksMin.data });

        } else {
            console.log("Response", responseBooksMin);
            alert(responseBooksMin.message);
        }
    }
    async getKategoriler() {
        //kategoriler
        let responseCategory = await category();
        console.log("RESPONSE ", responseCategory);
        if (!responseCategory) {
            console.log("Response boş responseCategory");
        }

        if (responseCategory.status) {

            this.setState({ category: responseCategory.data });

        } else {
            console.log("Response", responseCategory);
            alert(responseCategory.message);
        }
    }
    async getPopuler() {
        //kategoriler
        let responsePopular = await popular();
        console.log("RESPONSE popular", responsePopular);
        if (!responsePopular) {
            console.log("Response boş responsePopular");
        }

        if (responsePopular.status) {

            this.setState({ popular: responsePopular.data });

        } else {
            console.log("Response", responsePopular);
            alert(responsePopular.message);
        }
    }

    async favorite(id){
        // alert(id);
        showMessage({
            message: "Favorilere Eklendi",
            type: "info",
        });
    }



    onPressAll(id) {
        this.props.navigation.navigate('Books');
    }
    bookOnPress(id){
        this.props.navigation.navigate('BookDetail',{bookId:id});
    }

    render() {
        if (!this.state.ready) return <Loader/>;

        return (
            <View style={{ flex: 1 }}>
                <MyHeader
                    navigation={this.props.navigation}
                    text="Anasayfa"
                    notification
                    search
                />
                <ScrollView>

                    <Banner url={imageUrl + "kitap-kahve.jpg"} />

                    <CardSwiper
                        ready={false}
                        onPressFavorite={this.favorite}
                        onPressCard={(id)=>this.bookOnPress(id)}
                        items={this.state.booksMin}
                        title="En Uygun"
                    />

                    <Banner url={imageUrl + "kitap.jpg"} />
                    <Banner onPress={() => this.props.navigation.navigate('Categories')} containerStyle={{ padding: 10 }} title="Okumaya Başla" text="- D. Scilus" subTitle="Kitaplıklar aklın tedavi yerleridir." imageStyle={{ width: screenWidth, height: screenWidth / 1061 * 800 }} url={imageUrl + 'acik-kitap.jpg'} />

                    <ImageSwiper
                        onPressCard={() => { this.props.navigation.navigate('Books') }}
                        items={this.state.category}
                        title="Kategoriler"
                        isAll
                        categoryId={11}
                        onPressAll={(id) => { this.props.navigation.navigate('Library') }}
                    />


                    <CardSwiper
                        onPressFavorite={() => {
                            showMessage({
                                message: "Favorilere eklendi",
                                type: "info",
                            });
                        }}
                        onPressCard={(id)=>this.bookOnPress(id)}
                        items={this.state.popular}
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
        image: imageUrl + 'film.jpg',
        isListen: true,
        isFree: false,
        isFavorite: false,
    },
    {
        id: 101,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: imageUrl + 'eldiven.jpg',
        isListen: false,
        isFree: true,
        isFavorite: true,
    },
    {
        id: 102,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: imageUrl + 'eldiven.jpg',
        isListen: false,
        isFree: false,
        isFavorite: true,

    },
    {
        id: 103,
        title: "Bir ömür nasıl yaşanır?",
        author: "İlber Ortaylı",
        image: imageUrl + 'eldiven.jpg',
        isListen: true,
        isFree: true,
        isFavorite: false,
    }
]
