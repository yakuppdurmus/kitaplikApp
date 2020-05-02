import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Text, Button } from 'native-base'
import { MyHeader, HashButton, FullButton, Loader } from '../components'
import { imageUrl } from '../services/config'
import { bookDetail } from '../services'


const BookItem = ({ image, bookName, author }) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {/* {console.log(imageUrl + 'bg1-50.jpg')} */}
            <Image
                source={{ uri: image ? image : (imageUrl + 'placeholder.jpg') }}
                style={{ width: 100, height: 100, borderRadius: 5 }}
            />
            <View style={{ flex: 1, justifyContent: 'space-around', paddingLeft: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: '600' }}>{bookName}</Text>
                <Text style={{ fontSize: 12, color: '#555' }}>{author}</Text>
            </View>

        </View>
    )
}

export class BookDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ready: false,
            bookId: this.props.navigation.getParam('bookId'),
        }
    }
    componentDidMount() {
        this.requestData();
    }
    async requestData() {

        await this.getBookDetail()
    }
    async getBookDetail() {
        //Kitap detay request
        const response = await bookDetail(this.state.bookId);
        console.log("RESPONSE bookDetail : ", response, this.state.bookId);

        if (!response) {
            console.log("Response boş");
            this.setState({ ready: false });
            return;
        }

        if (response.status) {
            this.setState({ book: response.data });
            this.setState({ ready: true });
        } else {
            console.log("Response", response);
            alert(response.message);
            this.setState({ ready: false });
        }
    }

    render() {

        if (!this.state.ready) return <Loader/>
        let { bookName, id, description, image, author } = this.state.book;

        return (
            <View style={{ flex: 1 }}>
                <MyHeader
                    back
                    navigation={this.props.navigation}
                    text={bookName} />

                <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
                    <BookItem
                        image={image}
                        bookName={bookName}
                        author={author} />
                    <FullButton onPress={() => {
                        this.props.navigation.navigate('BookRead', { bookId: id });
                    }} text="Bu kitabı şimdi oku!" />
                    <Text style={{ marginTop: 20, marginBottom: 20, fontWeight: '600', fontSize: 20 }}>Açıklama</Text>
                    <Text>
                        {description}
                    </Text>
                    <Text style={{ marginTop: 20, marginBottom: 20, fontWeight: '600', fontSize: 20 }}>Etiketler</Text>

                    <ScrollView showsHorizontalScrollIndicator={false} horizontal contentContainerStyle={{ paddingBottom: 10, paddingTop: 10 }}>
                        <HashButton
                            text="Eğitim"
                        />
                        <HashButton
                            text="Kişisel Gelişim"
                        />
                        <HashButton
                            text="Hayat"
                            active
                        />
                        <HashButton
                            text="Hayat"
                            active
                        />
                        <HashButton
                            text="Hayat"
                            active
                        />
                    </ScrollView>

                </ScrollView>

            </View>
        )
    }
}

export default BookDetail
