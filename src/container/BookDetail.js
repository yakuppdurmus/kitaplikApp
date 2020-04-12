import React, { Component } from 'react'
import { View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Text, Button } from 'native-base'
import { MyHeader, HashButton, FullButton } from '../components'


const BookItem = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <Image
                // source={require('../assets/images/bg1.jpg')}
                style={{ width: 100, height: 100, borderRadius: 5 }}
            />
            <View style={{ flex: 1, justifyContent: 'space-around', paddingLeft: 10 }}>
                <Text style={{ fontSize: 14, fontWeight: '600' }}>Mucize Bilinçaltını Bilinçli Yönet</Text>
                <Text style={{ fontSize: 12, color: '#555' }}>Adil Maviş</Text>
            </View>

        </View>
    )
}

export class BookDetail extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MyHeader
                    back
                    navigation={this.props.navigation}
                    text="Kitap Adı" />

                <ScrollView contentContainerStyle={{ padding: 20, paddingBottom: 40 }}>
                    <BookItem />
                    <FullButton text="Bu kitabı şimdi oku!" />
                    <Text style={{ marginTop: 20, marginBottom: 20, fontWeight: '600', fontSize: 20 }}>Sinopsis</Text>
                    <Text>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </Text>

                    <Text style={{ marginTop: 10 }}>
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                    </Text>
                    <Text style={{ marginTop: 20, marginBottom: 20, fontWeight: '600', fontSize: 20 }}>Etiketler</Text>

                    <ScrollView showsHorizontalScrollIndicator={false}  horizontal contentContainerStyle={{paddingBottom:10,paddingTop:10}}>
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
