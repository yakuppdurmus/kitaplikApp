import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { Button, Text, } from 'native-base'
import { register, login, loginAnonymous } from '../services'
import { LoginForm } from '../components/LoginForm'

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
const borderRadius = 100;
const backgroundColor1 = "#3498db";
const opacity = .4;

export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    onSubmit = async (model) => {

        this.setState({lock:true});
        const response = await login(model,(data)=>alert(data));
        if(response.user._user.isAnonymous == false){
            this.props.navigation.navigate('Home');
        }
        this.setState({lock:false});
    }
    onSubmitAnonymous= async ()=>{
        this.setState({lockAnonymous:true});
        const response = await loginAnonymous();
        if(response.user._user.isAnonymous == true){
            this.props.navigation.navigate('Home');
        }
        this.setState({lockAnonymous:false});


    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#ddd' }}>
                {this.renderBackground()}
                <LoginForm
                    lock={this.state.lock}
                    lockAnonymous={this.state.lockAnonymous}
                    onSubmit={this.onSubmit}
                    onSubmitAnonymous={this.onSubmitAnonymous}
                    goRegister={()=>this.props.navigation.navigate('Register')}
                />
            </View>
        )
    }

    renderBackground = () => {
        return <View style={{ width: screenWidth, height: screenHeight, position: 'absolute', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ position: 'absolute', width: screenWidth, height: screenWidth + 150, backgroundColor: backgroundColor1, borderRadius: borderRadius / 4, opacity: opacity }} />
            <View style={{ position: 'absolute', width: screenWidth + 150, height: screenWidth + 150, backgroundColor: backgroundColor1, borderRadius: borderRadius, opacity: opacity, transform: [{ rotate: '45deg' }] }} />
            <View style={{ position: 'absolute', width: screenWidth, height: screenWidth, backgroundColor: backgroundColor1, borderRadius: borderRadius, opacity: opacity, transform: [{ rotate: '80deg' }] }} />
            <View style={{ position: 'absolute', width: screenWidth, height: screenWidth, backgroundColor: backgroundColor1, borderRadius: borderRadius, opacity: opacity, transform: [{ rotate: '30deg' }] }} />
            <View style={{ position: 'absolute', width: screenWidth - 150, height: screenWidth - 150, backgroundColor: backgroundColor1, borderRadius: borderRadius, opacity: opacity, transform: [{ rotate: '80deg' }] }} />
        </View>
    }
}

export default Login
