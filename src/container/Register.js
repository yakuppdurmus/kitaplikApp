import React, { Component } from 'react'
import { View, Dimensions } from 'react-native'
import { Button, Text, Title } from 'native-base'
import { AppBackground, MyHeader, MyCard, AppInput } from '../components';
import Spinner from 'react-native-spinkit';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
const screenWidth = Dimensions.get('window').width;
export class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Mail: "",
            Password: "",
            lock: false
        }
    }
    onChangeTextEmail(input) {
        this.setState({ Mail: input });
    }
    onChangeTextPassword(input) {
        this.setState({ Password: input });
    }
    onSubmit(){
        alert('todo');

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <AppBackground type="header" />
                <MyHeader navigation={this.props.navigation} back text="Kayıt Ol" />

                <View style={{ paddingTop: screenWidth * .3, alignItems: 'center', flex: 1 }}>
                    <MyCard style={{ width: screenWidth * .9,height:300, padding: 10, paddingTop: 20 }}>
                        
                            <View style={{ flex: 1 }}>
                                <Title style={{ marginBottom: 20 }}>Klasikden biraz az! </Title>
                                <AppInput
                                    autoFocus
                                    containerStyle={{ height: 40 }}
                                    textStyle={{ color: '#333' }}
                                    inputStyle={{ borderWidth: 1 }}
                                    placeholder="Email"
                                    reqired
                                    input={this.state.Mail}
                                    inputChange={(input) => this.onChangeTextEmail(input)}
                                    title="Email" />

                                <AppInput
                                    secureTextEntry
                                    containerStyle={{ height: 40 }}
                                    textStyle={{ color: '#333' }}
                                    inputStyle={{ borderWidth: 1 }}
                                    placeholder="Şifre"
                                    reqired
                                    input={this.state.Password}
                                    inputChange={(input) => this.onChangeTextPassword(input)}
                                    title="Şifre" />

                            </View>

                            <Button
                                disabled={this.state.lock}
                                full
                                style={{ backgroundColor: '#2980b9', borderColor: '#2980b9', borderRadius: 10 }}
                                onPress={() => this.onSubmit()}>
                                {!this.state.lock && <Text >Kaydet ve Giriş Yap</Text>}
                                <Spinner isVisible={!!this.state.lock} size={30} type={"Wave"} color={"white"} />
                            </Button>
                        
                    </MyCard>

                </View>
            </View>
        )
    }
}

export default Register
