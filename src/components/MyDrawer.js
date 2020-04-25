import React from 'react'
import { Text, View ,Image,Platform} from 'react-native'
import {ListItem, Item} from 'native-base'
import {imageUrl} from '../services/config'
const onPress = (navigation, screen) => {
    navigation.navigate(screen);
}

const iosStyle = { width:'103%',marginLeft:'-2.3%',marginTop:-70,backgroundColor: '#bdc3c7', height: 300, transform: [{ rotateZ: '10deg' }, { skewX: '0deg' }] };
const androidStyle = { width:'100%',marginTop:-70,backgroundColor: '#bdc3c7', height: 300};

export const MyDrawer = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={Platform.OS == 'ios' ?iosStyle : androidStyle} />
            <View style={{ borderWidth: 0, borderColor: 'white',justifyContent:'center',alignItems:'center', backgroundColor: '#fff', width: 200, height: 200, borderRadius: 100, marginTop: -100, alignSelf: 'center' }}>
            <Image style={{borderWidth:0,width:188,height:188,borderRadius:100,margin:6}} resizeMode="cover" source = {{uri:imageUrl + "placeholder.jpg"}} />
            {/* <Text style={{color:'#2c3e50',fontWeight:'bold',fontSize:70}}>YD</Text> */}
            </View>

            <View style={{marginBottom:50}}>

            <ListItem>
                <Text style={{fontWeight:'bold',fontSize:20}}>İstatistik Pencerem</Text>
            </ListItem>
            <ListItem>
                <Text>19 Kitap</Text>
            </ListItem>
            <ListItem>
                <Text>156 Sayfa</Text>
            </ListItem>
            <ListItem>
                <Text>1021021 Kelime</Text>
            </ListItem>
            <ListItem>
                <Text style={{fontWeight:'bold',fontSize:20}}>Sayfalara Git</Text>
            </ListItem>
            <ListItem onPress={()=>navigation.navigate('Categories')}>
                <Text>Kategoriler</Text>
            </ListItem>
            <ListItem onPress={()=>navigation.navigate('Tab1')}>
                <Text>Tab1</Text>
            </ListItem>
            </View>

            <View style={{ width:'100%',marginBottom:0,backgroundColor: '#bdc3c7', height: 300}} />




        </View>
    )
}
