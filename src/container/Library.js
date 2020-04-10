import React, { Component } from 'react'
import { Text, View, Dimensions,TouchableOpacity } from 'react-native'
import { Icon } from 'native-base';
import { MyHeader, WordAnimation, FabButton } from '../components';

const screenWidth = Dimensions.get('window').width
const boxWidth = screenWidth + 200;
export class Library extends Component {

    componentDidMount() {
    }



    render() {


        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <MyHeader
                navigation={this.props.navigation}
                text={"Kütüphane"}
                />
                <WordAnimation onPress={()=>this.props.navigation.navigate('Home')}/>

            </View>
        )
    }
}

export default Library
