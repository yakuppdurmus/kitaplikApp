import React, { Component } from 'react'
import { View, } from 'react-native'
import { Icon, Text } from 'native-base';
import { DoubleScreen } from '../components';



export class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }





    render() {
        return (
            <View style={{ flex: 1 }}>
                <DoubleScreen/>

            </View>
        )
    }
}

export default Profile
