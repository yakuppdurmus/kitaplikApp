import React, { Component } from 'react'
import { View, } from 'react-native'
import {  login, loginAnonymous } from '../services'
import { LoginForm , AppBackground} from '../components';


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
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <AppBackground/>
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
}

export default Login
