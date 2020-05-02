import React, { Component } from 'react'
import { View, } from 'react-native'
import {  login, guestLogin,books } from '../services'
import { LoginForm , AppBackground} from '../components';


export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    onSubmit = async (model) => {

        this.setState({lock:true});
        const response = await login(model);
        if(!response){
            console.log("Response boş");
            this.setState({lock:false});
            return;
        }

        if(response.status){
            this.props.navigation.navigate('Home');
        }else{
            console.log("Response" ,response);
            alert(response.message);
            this.setState({lock:false});
        }
        
    }
    onSubmitAnonymous= async ()=>{

        this.setState({lockAnonymous:true});
        const response = await guestLogin({deviceId:"androidioddeviceid"});
        if(!response){
            console.log("Response boş");
            this.setState({lockAnonymous:false});
            return;
        }

        if(response.status){
            this.props.navigation.navigate('Home');
        }else{
            console.log("Response" ,response);
            alert(response.message);
            this.setState({lockAnonymous:false});
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
