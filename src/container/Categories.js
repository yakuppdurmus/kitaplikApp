import React, { Component } from 'react'
import { View, SafeAreaView } from 'react-native'
import { Text } from 'native-base'
import { CircleProfile } from '../components/CircleProfile';


export class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }

    }
    render() {
        let profile = [
            { deg: 90, icon: 'account-question', type: "MaterialCommunityIcons", text: "Siyaset / Güncel Sorunlar" },
            { deg: 60, icon: 'child', type: "FontAwesome", text: "Eğitim / Aile / Kişisel Gelişim" },
            { deg: 30, icon: 'mosque', type: 'FontAwesome5', text: "Dini" },
            { deg: 0, icon: 'book', type: "FontAwesome", text: "Edebiyat / Şiir " },
            { deg: 330, icon: 'line-graph', type: "Entypo", text: "Ekonomi" },
            { deg: 300, icon: 'pencil', type: "FontAwesome", text: "Tarih / Sosyoloji / Piskoloji" },
            { deg: 270, icon: 'university', type: "FontAwesome", text: "Eğitim / Kültür / Sanat" },
        ]
        return (
            <View style={{ flex: 1 }}>
                <View style={{ position: 'absolute', zIndex: 2, width: '100%', height: 200, justifyContent: 'center', alignItems: 'center' }}>
                    <SafeAreaView>
                        <View style={{ padding: 10, alignItems: 'center', borderRadius: 10, backgroundColor: 'rgba(52, 73, 94,.5)' }}>
                            <Text style={{ color: 'white', fontSize: 34,fontWeight:'500' }}>KATEGORİLER</Text>
                        </View>
                    </SafeAreaView>
                </View>
                <CircleProfile profile={profile} marginLeft={30} boxSmallWidth={60} />
            </View>
        )
    }


}

export default Categories
